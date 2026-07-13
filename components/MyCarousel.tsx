"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  thumbnails: string[];
  title: string;
}

const MyCarousel = ({ thumbnails, title }: IProps) => {
  const [index, setIndex] = useState(0);
  const [displayedImage, setDisplayedImage] = useState(thumbnails[0] ?? "");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeImage = (newIndex: number) => {
    if (!thumbnails.length || newIndex === index) return;

    setIsTransitioning(true);

    window.setTimeout(() => {
      setIndex(newIndex);
      setDisplayedImage(thumbnails[newIndex]);
      setIsTransitioning(false);
    }, 150);
  };

  const renderBottomImages = thumbnails.map((thumbnail, idx) => {
    return (
      <Image
        key={idx}
        className={`rounded-md object-cover cursor-pointer box-border border-2 ease-in-out duration-150 ${idx === index ? `border-[#204A25]` : `border-transparent`}`}
        src={thumbnail}
        width={500}
        height={500}
        alt={title}
        onClick={() => {
          changeImage(idx);
        }}
      />
    );
  });

  return (
    <div className="min-w-[50%] h-full rounded-md flex flex-col justify-between ">
      <div className="h-[70%] relative my-7 flex items-center rounded-md  mx-5 bg-contain bg-center bg-no-repeat  bg-transparent ">
        <div
          key={displayedImage}
          className={`absolute inset-0 mx-auto z-0 w-[70%] rounded-lg    h-full bg-center bg-contain bg-no-repeat object-contain transition-opacity duration-300 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${displayedImage})` }}
        />

        <div className="w-full flex justify-between items-center ">
          <div className="w-6 h-6 z-1 bg-[#204A25] opacity-40 hover:opacity-100 duration-200 rounded-lg cursor-pointer">
            <ChevronLeft
              color="white"
              onClick={() => {
                const nextIndex =
                  (index - 1 + thumbnails.length) % thumbnails.length;
                changeImage(nextIndex);
              }}
            />
          </div>

          <div className="w-6 h-6 bg-[#FFBB35]  z-1 opacity-40 hover:opacity-100 duration-200 rounded-lg cursor-pointer ">
            <ChevronRight
              color="white"
              onClick={() => {
                const nextIndex = (index + 1) % thumbnails.length;
                changeImage(nextIndex);
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-between   mb-7 px-5 gap-2">
        {renderBottomImages}
      </div>
    </div>
  );
};

export default MyCarousel;
