"use client";
import { IProduct } from "@/interfaces";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const { documentId, category, price, rating, thumbnails, title } = product;

  return (
    <Link
      className="flex w-full max-w-62.5 flex-col rounded-lg  bg-[#e2e2e239] cursor-pointer p-1"
      href={`/${documentId}`}
    >
      <div
        className="relative h-[70%]"
        onMouseEnter={() => setIsFocus(true)}
        onMouseLeave={() => setIsFocus(false)}
      >
        <Image
          width={300}
          height={100}
          src={thumbnails[0]}
          alt={title}
          className={`rounded-md ease-in-out duration-300 transition-opacity ${isFocus ? "opacity-0 " : "opacity-100"}`}
        />
        <Image
          width={300}
          height={100}
          src={thumbnails[1]}
          alt={title}
          className={` absolute inset-0 rounded-md ease-in-out duration-300 transition-opacity ${isFocus ? "opacity-100 " : "opacity-0"}`}
        />

        <div className="flex flex-col my-2 gap-2 px-2">
          <div className="flex justify-between">
            <span className="text-gray-700 tracking-tight capitalize">
              {category.title}
            </span>
            <div className="flex gap-1 items-center">
              <Star size={18} color="transparent" fill="#FFBC35" />
              <span className="font-semibold">{rating}</span>
            </div>
          </div>

          <span className="font-semibold tracking-tight capitalize">
            {title}
          </span>
          <span className="font-semibold">${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
