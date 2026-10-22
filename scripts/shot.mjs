import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9333;
const outDir = path.join(os.tmpdir(), "palladium-shots");
fs.mkdirSync(outDir, { recursive: true });

console.log("launching chrome");
const child = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--remote-allow-origins=*",
    `--user-data-dir=${path.join(os.tmpdir(), "palladium-chrome")}`,
    `--remote-debugging-port=${port}`,
    "--window-size=1440,1100",
    "about:blank",
  ],
  { stdio: "ignore" },
);

async function waitJson() {
  for (let i = 0; i < 50; i++) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`, { signal: AbortSignal.timeout(800) });
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Chrome não abriu a porta de depuração");
}

await waitJson();
console.log("chrome ready");
const listed = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(3000) });
const pages = await listed.json();
const target = pages.find((item) => item.type === "page") ?? pages[0];
console.log("target", target?.url);

console.log("ws", target.webSocketDebuggerUrl);
const ws = new WebSocket(target.webSocketDebuggerUrl);
ws.addEventListener("open", () => console.log("ws open"));
ws.addEventListener("error", () => console.log("ws error", ws.readyState));
ws.addEventListener("close", (event) => console.log("ws close", event.code, event.reason));
setTimeout(() => console.log("ws state", ws.readyState), 3000);
await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error("ws timeout")), 8000);
  ws.addEventListener("open", () => {
    clearTimeout(timer);
    resolve();
  });
  ws.addEventListener("error", () => {
    clearTimeout(timer);
    reject(new Error("ws error"));
  });
});

let seq = 0;
const pending = new Map();
const events = [];
ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  } else if (message.method) {
    events.push(message);
  }
});

function send(method, params = {}, timeout = 20000) {
  const id = ++seq;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`timeout ${method}`));
    }, timeout);
    pending.set(id, (message) => {
      clearTimeout(timer);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result);
    });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

function waitEvent(method, timeout = 20000) {
  const start = events.length;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout event ${method}`)), timeout);
    const check = () => {
      const found = events.slice(start).find((item) => item.method === method);
      if (found) {
        clearTimeout(timer);
        resolve(found);
      } else {
        setTimeout(check, 40);
      }
    };
    check();
  });
}

async function shot(name, url, { width = 1440, height = 1100, script, hover, full = false } = {}) {
  console.log("open", name);
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 800,
  });
  const loaded = waitEvent("Page.loadEventFired");
  await send("Page.navigate", { url });
  await loaded;
  await send("Runtime.evaluate", {
    expression: `Promise.race([
      Promise.all([...document.images].map((img) => img.complete ? 1 : new Promise((resolve) => { img.addEventListener("load", () => resolve(1), { once: true }); img.addEventListener("error", () => resolve(0), { once: true }); }))),
      new Promise((resolve) => setTimeout(() => resolve("wait"), 6000))
    ]).then((flags) => Array.isArray(flags) ? flags.filter(Boolean).length + "/" + document.images.length : flags)`,
    awaitPromise: true,
  }).then((result) => console.log(name, result.result.value));
  if (script) {
    const ran = await send("Runtime.evaluate", { expression: script, awaitPromise: true });
    console.log(name, "script", ran.result?.value);
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
  if (hover) {
    const point = await send("Runtime.evaluate", {
      expression: `(() => {
        const link = [...document.querySelectorAll("a")].find((node) => node.textContent.trim() === ${JSON.stringify(hover)});
        const rect = link.getBoundingClientRect();
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
      })()`,
      returnByValue: true,
    });
    const { x, y } = point.result.value;
    await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: 8, y: 8 });
    await send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y });
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  const metrics = await send("Page.getLayoutMetrics");
  const content = metrics.cssContentSize ?? metrics.contentSize;
  const image = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: full,
    fromSurface: true,
    clip: full
      ? { x: 0, y: 0, width: Math.ceil(content.width), height: Math.min(Math.ceil(content.height), 4200), scale: 1 }
      : undefined,
  });
  const file = path.join(outDir, `${name}.png`);
  fs.writeFileSync(file, Buffer.from(image.data, "base64"));
  console.log("saved", file, fs.statSync(file).size);
}

await send("Page.enable");

const openMenu = `(() => {
  const link = [...document.querySelectorAll("a")].find((node) => node.textContent.trim() === "Tratamentos");
  const host = link?.parentElement;
  host?.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  return !!host;
})()`;

const openMobile = `(() => {
  const button = document.querySelector("button[aria-controls='menu-mobile']");
  button?.click();
  return !!button;
})()`;

await shot("boxes", "http://localhost:3000/", {
  height: 900,
  script: `(() => "top")()`,
});

ws.close();
child.kill();
