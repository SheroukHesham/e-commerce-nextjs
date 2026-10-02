import type { ImageLoaderProps } from "next/image";

const BASE =
  process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL ??
  "https://res.cloudinary.com/w1gzdawt/image/upload";

export const cldUrl = (name: string) => `${BASE}/${name}`;

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `${BASE}/${params.join(",")}/${src}`;
}
