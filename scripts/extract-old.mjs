import fs from "node:fs";

const html = fs.readFileSync(process.env.TEMP + "/palladium-old.html", "utf8");
const hrefs = [...html.matchAll(/href="(https?:\/\/(?:www\.)?palladiumestetica\.com\.br[^"]*)"/gi)].map(
  (match) => match[1].split("#")[0],
);
const uniq = [...new Set(hrefs)].filter((url) => !/\.(jpg|jpeg|png|webp|css|js)(\?|$)/i.test(url));
console.log("LINKS", uniq.length);
for (const url of uniq) console.log(url);

const images = [...html.matchAll(/https?:\/\/(?:www\.)?palladiumestetica\.com\.br\/wp-content\/uploads\/[^"'\s]+/gi)].map(
  (match) => match[0],
);
console.log("IMAGES", [...new Set(images)].length);
for (const url of [...new Set(images)]) console.log(url);
