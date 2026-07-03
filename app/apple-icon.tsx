import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17181c",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 800,
            fontFamily: "sans-serif",
            backgroundImage: "linear-gradient(135deg, #2f8fef 10%, #55e07a 90%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
