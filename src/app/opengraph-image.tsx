import { GenerateImage } from "./utils/og-generator";

export const runtime = "edge";

export const alt = "Picky";
export const contentType = "image/png";

export const size = {
  width: 1200,
  height: 630,
};

// Image generation
export default async function Image() {
  return await GenerateImage({
    title: "Picky",
    description: "Quick and free tools for pictures.",
  });
}
