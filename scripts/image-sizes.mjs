import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = path.join(process.cwd(), "public", "clinica");
const files = fs.readdirSync(dir);
for (const file of files) {
  const meta = await sharp(path.join(dir, file)).metadata();
  console.log(String(meta.width).padStart(4), String(meta.height).padStart(4), file);
}
