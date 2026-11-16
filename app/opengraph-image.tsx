import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "авадом — центр коррекции речи и поведения";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraphImage() {
  const font = await readFile(join(process.cwd(), "app/fonts/Lena.ttf"));
  return new ImageResponse(
    <div style={{ background: "#FFF0D1", color: "#1F1A17", width: "100%", height: "100%", padding: 70, display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Lena" }}>
      <div style={{ display: "flex", color: "#DD4A40", fontSize: 100, marginBottom: 30 }}>авадом</div>
      <div style={{ display: "flex", fontSize: 56, maxWidth: 950 }}>Центр коррекции речи и поведения</div>
      <div style={{ display: "flex", marginTop: 36, fontSize: 30 }}>ABA-терапия / Денверская модель (ESDM)</div>
      <div style={{ display: "flex", marginTop: 24, width: 90, height: 6, background: "#599BB4" }} />
    </div>,
    { ...size, fonts: [{ name: "Lena", data: font, style: "normal", weight: 400 }] }
  );
}
