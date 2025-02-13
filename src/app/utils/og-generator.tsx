import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export async function GenerateImage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  // Use WOFF2 format instead of TTF for better compression
  const font = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontSize: "160px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: "40px",
                opacity: 0.9,
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
