import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INSET = 40;
const TICK = 28;
const STROKE = 3;
const LINE = "#3a3a3d";

function Corner({
  top,
  bottom,
  left,
  right,
}: {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        width: TICK,
        height: TICK,
        ...(top ? { top: INSET, borderTop: `${STROKE}px solid ${LINE}` } : {}),
        ...(bottom
          ? { bottom: INSET, borderBottom: `${STROKE}px solid ${LINE}` }
          : {}),
        ...(left ? { left: INSET, borderLeft: `${STROKE}px solid ${LINE}` } : {}),
        ...(right
          ? { right: INSET, borderRight: `${STROKE}px solid ${LINE}` }
          : {}),
      }}
    />
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          backgroundImage:
            "linear-gradient(to right, #1c1c1f 1px, transparent 1px), linear-gradient(to bottom, #1c1c1f 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <Corner top left />
        <Corner top right />
        <Corner bottom left />
        <Corner bottom right />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 30,
            letterSpacing: 4,
            color: "#f3f2ee",
          }}
        >
          ROCTIV
          <span style={{ color: "#e8a13d" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            maxWidth: 820,
            fontSize: 54,
            lineHeight: 1.15,
            color: "#f3f2ee",
            fontWeight: 500,
          }}
        >
          Software sob medida para o seu negócio.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 24,
            color: "#a3a29c",
          }}
        >
          {site.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
