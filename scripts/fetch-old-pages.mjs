import fs from "node:fs";
import path from "node:path";

const pages = [
  "https://www.palladiumestetica.com.br/criolipolise/antes-e-depois",
  "https://www.palladiumestetica.com.br/ultraformer/antes-e-depois",
  "https://www.palladiumestetica.com.br/criolipolise",
  "https://palladiumestetica.com.br/ultraformer",
  "https://www.palladiumestetica.com.br/tratamento-flacidez",
  "https://www.palladiumestetica.com.br/harmonizacao-facial",
];

const outDir = path.join(process.cwd(), "scripts", "old-pages");
fs.mkdirSync(outDir, { recursive: true });

for (const url of pages) {
  const name = url.replace(/https?:\/\/(www\.)?palladiumestetica\.com\.br\/?/, "").replaceAll("/", "_") || "home";
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  const html = await response.text();
  fs.writeFileSync(path.join(outDir, `${name}.html`), html);
  const images = [
    ...new Set(
      [...html.matchAll(/https?:\/\/[^"'\\\s>]+\.(?:jpg|jpeg|png|webp)/gi)].map((match) =>
        match[0].replace(/\\u0026/g, "&"),
      ),
    ),
  ].filter((item) => item.includes("wp-content/uploads") && !item.includes("cropped-favicon"));
  console.log("\n==", response.status, url);
  for (const image of images) console.log(image);
}
