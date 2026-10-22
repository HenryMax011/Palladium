import fs from "node:fs";
import path from "node:path";

const urls = [
  "https://palladiumestetica.com.br/wp-content/uploads/2023/10/Mulher-Negra-de-Meia-Idade.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/01/ultraformer3-1.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Criolipolise.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/armonizacao-facial.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/gordura-localizada-.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/placas.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Tratamento-para-Flacidez.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Tratamento-de-Estrias.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Tratamento-da-Celulite.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Skinbooster.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/01/bumbum.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/flacidez.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Preenchimento-Facial.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/criolipose.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/03/crioliolise-palladium-antes-e-depois-1.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/03/crioliolise-palladium-antes-e-depois-3.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/03/crioliolise-palladium-antes-e-depois-4.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/03/antes-e-depois-criolipolise.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Perda-de-gordura-abdominal-homem-2.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Areas-para-criolipolise.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/01/Criolipolise-Antes-e-Depois.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/11/criolipolie-para-homens.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/03/antes-e-depois-criolipolise-homem.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Palladium-site-3.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Palladium-site-2-1.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Palladium-site-5.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Palladium-site-4.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Palladium-site-3-1.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Palladium-site-8.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/Palladium-site-7.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/foxy-eyes-antes-e-depois.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/03/Ultraformer.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/02/ultraformer-III.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/01/ultraformer3.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Ultraforme-3.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Tratamento-para-Flacidez-1.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Carboxiterapia.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Lipo-Enzimatica.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/banner-principal-home.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/10/Full-Face.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2023/04/8-fios-de-sustentacao-restricoes.jpg",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Botulinica.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Colageno.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Fios-de-PDO.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Peeling.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/11/Microagulhamento.png",
  "https://palladiumestetica.com.br/wp-content/uploads/2022/12/Limpeza-de-Pele.png",
];

const dest = path.join(process.cwd(), "public", "clinica");
fs.mkdirSync(dest, { recursive: true });

function filename(url) {
  const base = decodeURIComponent(url.split("/").pop().split("?")[0]);
  return base
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/-\./g, ".")
    .toLowerCase();
}

for (const url of urls) {
  const name = filename(url);
  const file = path.join(dest, name);
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!response.ok) {
    console.log("FAIL", response.status, name);
    continue;
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(file, buffer);
  console.log("OK", buffer.length, name);
}
