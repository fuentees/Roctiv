import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const INSET = 28;
const TICK = 20;
const STROKE = 3;
const BG = "#0a0a0b";
const LINE = "#3a3a3d";
const FG = "#f3f2ee";
const ACCENT = "#e8a13d";

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

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BG,
        }}
      >
        <Corner top left />
        <Corner top right />
        <Corner bottom left />
        <Corner bottom right />

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 92,
              fontWeight: 700,
              color: FG,
              letterSpacing: -4,
              lineHeight: 1,
            }}
          >
            R
          </span>
          <span
            style={{
              width: 13,
              height: 13,
              borderRadius: 999,
              background: ACCENT,
              marginLeft: 5,
              marginBottom: 14,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
