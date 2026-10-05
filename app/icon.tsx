import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 19,
            fontWeight: 700,
            color: "#f3f2ee",
            letterSpacing: -1,
          }}
        >
          R
        </span>
        <span
          style={{
            width: 3,
            height: 3,
            borderRadius: 999,
            background: "#e8a13d",
            marginLeft: 1,
            marginTop: 9,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
