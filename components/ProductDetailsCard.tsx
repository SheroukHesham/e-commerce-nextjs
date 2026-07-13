"use client";
import { useAppDispatch } from "@/app/lib/hooks";
import { IProduct } from "@/interfaces";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { addToCart } from "@/app/lib/features/cartSlice";
import MyCarousel from "./MyCarousel";
import toast, { Toaster } from "react-hot-toast";

interface IProps {
  product: IProduct;
}

const ProductDetailsCard = ({ product }: IProps) => {
  const dispatch = useAppDispatch();

  const {
    documentId,
    thumbnails,
    brand,
    category,
    description,
    price,
    rating,
    title,
  } = product;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product: {
          productId: documentId,
          thumbnail: thumbnails[0],
          title: title,
        },
        quantity: 1,
      }),
    );
    toast("Added to Cart");
  };

  const renderRating = () => {
    if (!rating) return <Star color="transparent" size={16} fill="#FEBB34" />;

    return Array.from({ length: Math.floor(rating) }, (_, idx) => (
      <Star key={idx} color="transparent" size={16} fill="#FEBB34" />
    ));
  };

  return (
    <div className=" sm:w-lg md:w-xl lg:w-2xl xl:w-4xl rounded-md flex justify-center items-center h-125 border border-[#e2e2e239] bg-[#e2e2e239]  ">
      {/* Big Screens View */}
      {<MyCarousel thumbnails={thumbnails} title={title} />}

      <div className=" flex  flex-col gap-3  min-w-[50%]  px-5 min-h-full py-10">
        <span className="text-sm tracking-tight text-gray-500">
          {category.title}
        </span>
        <span className="tracking-tight font-semibold text-lg">{title}</span>
        <div className="flex gap-1 items-center">
          {renderRating()}
          <span className="ml-1 font-semibold text-xs">{rating}</span>
        </div>
        <span className="font-semibold">${price}</span>
        <span className="tracking-tight text-sm text-gray-500">
          {description}
        </span>
        <div className="gap-5 flex">
          <Button variant={"default"} onClick={handleAddToCart}>
            Add to cart
          </Button>
          <Button variant={"secondary"}>Buy now</Button>
        </div>
        <span className="border-b border-gray-200 my-3" />
        <div className="flex items-center gap-1 text-xs">
          <span className="font-semibold  tracking-tight">Brand:</span>
          <span className="text-m text-gray-500">{brand}</span>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductDetailsCard;
