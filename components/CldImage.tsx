"use client";

import Image, { type ImageProps } from "next/image";
import cloudinaryLoader from "@/lib/cloudinary";

type CldImageProps = Omit<ImageProps, "loader" | "src"> & {
  src: string;
  alt: string;
};

const CldImage = (props: CldImageProps) => (
  <Image loader={cloudinaryLoader} {...props} />
);

export default CldImage;
