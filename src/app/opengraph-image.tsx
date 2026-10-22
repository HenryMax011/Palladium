import { ImageResponse } from "next/og";

export const alt = "Palladium Clínica de Estética";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#f3efe8",
          color: "#141210",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ width: 92, height: 116, background: "#D6AE5F" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
              PALLADIUM
            </div>
            <div style={{ fontSize: 32, marginTop: 12, color: "#D6AE5F" }}>estética</div>
          </div>
        </div>
        <div style={{ fontSize: 28, marginTop: 48, color: "#6a615a" }}>
          Tatuapé · Avenida Paulista
        </div>
      </div>
    ),
    size,
  );
}
