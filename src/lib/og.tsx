import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { ARROW_PATH, C_PATH, MARK_VIEWBOX } from "@/components/brand/geometry";
import { brandColors as c } from "@/config/brand";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/@fontsource/poppins/files");

async function loadFonts() {
  const [regular, semibold] = await Promise.all([
    readFile(join(fontDir, "poppins-latin-400-normal.woff")),
    readFile(join(fontDir, "poppins-latin-600-normal.woff")),
  ]);
  return [
    { name: "Poppins", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Poppins", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

/** Branded social image: white canvas, Ink type, Brand Blue mark and rule. Flat colours only. */
export async function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: c.white,
          fontFamily: "Poppins",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 16, backgroundColor: c.ink, display: "flex" }} />
        <svg
          viewBox={MARK_VIEWBOX}
          width={520}
          height={512}
          style={{ position: "absolute", right: -90, bottom: -110 }}
        >
          <path d={C_PATH} fill="none" stroke={c.mist} strokeWidth={6} />
          <path d={ARROW_PATH} fill="none" stroke={c.mist} strokeWidth={6} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 88px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg viewBox={MARK_VIEWBOX} width={56} height={55}>
              <path d={C_PATH} fill={c.logo} />
              <path d={ARROW_PATH} fill={c.logo} />
            </svg>
            <span style={{ fontSize: 40, fontWeight: 600, color: c.ink, letterSpacing: -1 }}>Coxcel</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: c.ink600, textTransform: "uppercase", letterSpacing: 4 }}>
              <div style={{ width: 40, height: 4, backgroundColor: c.brand, display: "flex" }} />
              {eyebrow}
            </div>
            <div style={{ marginTop: 24, fontSize: title.length > 60 ? 56 : 68, fontWeight: 600, lineHeight: 1.08, color: c.ink, letterSpacing: -2 }}>
              {title}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22, color: c.ink600 }}>coxcel.com</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
