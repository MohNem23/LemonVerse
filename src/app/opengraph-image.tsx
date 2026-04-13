import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";
import { brandPalette } from "@/brand/tokens";

export const alt = "LemonVerse immersive AI language learning";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const [newsreader, manrope] = await Promise.all([
    readFile(new URL("../assets/fonts/newsreader/Newsreader-700.ttf", import.meta.url)),
    readFile(new URL("../assets/fonts/manrope/Manrope-700.ttf", import.meta.url)),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: `linear-gradient(135deg, ${brandPalette.background}, #1b2130 55%, #10212d)`,
          color: brandPalette.foreground,
          padding: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(circle at 20% 20%, rgba(244,208,63,.2), transparent 30%), radial-gradient(circle at 80% 15%, rgba(101,227,255,.18), transparent 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
            border: `1px solid ${brandPalette.line}`,
            borderRadius: "36px",
            padding: "48px",
            background: "rgba(17, 19, 23, 0.48)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: brandPalette.primary,
              fontSize: 26,
              fontFamily: "Manrope",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            LemonVerse
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 760 }}>
            <div
              style={{
                fontSize: 88,
                lineHeight: 1,
                fontFamily: "Newsreader",
                fontWeight: 700,
              }}
            >
              Where words become worlds.
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.4,
                fontFamily: "Manrope",
                color: brandPalette.muted,
              }}
            >
              AI-powered language immersion for kids, teens, adults, and families.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 24,
              fontFamily: "Manrope",
              color: brandPalette.foreground,
            }}
          >
            <div>24+ story worlds</div>
            <div>5 family profiles</div>
            <div>$8.99/month bundle</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: newsreader, style: "normal", weight: 700 },
        { name: "Manrope", data: manrope, style: "normal", weight: 700 },
      ],
    },
  );
}
