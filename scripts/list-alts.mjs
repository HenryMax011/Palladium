import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "scripts", "old-pages");
for (const file of fs.readdirSync(dir)) {
  const html = fs.readFileSync(path.join(dir, file), "utf8");
  console.log("\n##", file);
  const tags = [...html.matchAll(/<img[^>]+>/gi)].map((match) => match[0]);
  for (const tag of tags) {
    const src = tag.match(/src="([^"]+)"/i)?.[1] ?? "";
    const alt = tag.match(/alt="([^"]*)"/i)?.[1] ?? "";
    if (!src.includes("uploads") || src.includes("favicon") || src.includes("imagem-")) continue;
    console.log("-", alt || "(sem alt)");
    console.log(" ", src);
  }
}
