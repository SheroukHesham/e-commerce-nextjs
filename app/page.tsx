import CldImage from "@/components/CldImage";
import DisplayProducts from "@/components/DisplayProducts";
import Footer from "@/components/Footer";
import { LandingCarousel } from "@/components/LandingCarousel";
import { LandingGallery } from "@/components/LandingGallery";
import LandingHeader from "@/components/LandingHeader";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { LANDING_BROWSE } from "@/data";
import { IProduct } from "@/interfaces";
import { ArrowRight } from "lucide-react";

// export async function getProducts() {
//   //TODO:limit to 8
//   const res = await fetch(`${process.env.BASE_URL}/products?populate=*`, {
//     headers: {},
//   });
//   if (!res.ok) {
//     throw new Error("failed to fetch data");
//   }

//   const { data } = await res.json();
//   return data;
// }

export default async function Home() {
  // const products: IProduct[] = await getProducts();

  // const renderProducts = products?.map((product, idx) => {
  //   return <ProductCard product={product} key={idx} />;
  // });

  const renderBrowseItems = LANDING_BROWSE.map((item, idx) => {
    return (
      <div
        key={idx}
        className="flex  flex-col items-center justify-center gap-y-5 "
      >
        <div className="group relative h-120 w-95 cursor-pointer overflow-hidden rounded-md shadow-lg transition-shadow duration-500 hover:shadow-2xl flex  items-center justify-end ">
          <CldImage
            src={item.src[1]}
            alt={item.title}
            fill
            sizes="350px"
            className="object-cover"
          />
          <CldImage
            src={item.src[0]}
            alt=""
            fill
            sizes="350px"
            className="object-cover opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
        </div>
        <h1 className="text-center text-[24px] font-semibold ">{item.title}</h1>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-14">
      <LandingHeader />
      <section className="mx-auto w-full min-h-171">
        <div className="flex flex-col items-center justify-center mb-15.5">
          <h1 className="capitalize font-bold pt-2 text-[32px] text-title">
            browse the range
          </h1>
          <h3 className="text-[20px] text-[#666666] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </div>
        <div className="w-fit  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-3 ">
          {renderBrowseItems}
        </div>
      </section>

      <section className="mx-auto max-w-309 min-h-271  items-center gap-y-7 flex flex-col">
        <h1 className="capitalize font-bold pt-2 text-[32px] text-title">
          our products
        </h1>

        <DisplayProducts />

        <Button size={"md"} variant={"outline"}>
          Show More
        </Button>
      </section>

      <section className=" max-h-167.5 bg-[#FCF8F3] flex flex-col lg:flex-row gap-y-5 gap-x-8 items-center py-11 overflow-hidden">
        <section className="h-full flex flex-col min-w-105.5 items-center lg:items-start justify-center  lg:ml-25">
          <h1 className="font-bold text-[40px] leading-none text-[#3A3A3A] tracking-tight mb-1.75 text-center md:text-left">
            50+ Beautiful rooms inspiration
          </h1>
          <h3 className="text-[16px] font-medium text-[#616161] mb-6.25 max-w-80">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </h3>
          <Button size={"md"} className={"px-9 rounded-none"}>
            Explore More
          </Button>
        </section>

        <div className="overflow-x-clip ">
          <section className="mx-auto flex flex-col md:flex-row sm:items-center gap-y-5 w-full max-w-6xl gap-x-6  overflow-x-hidden ">
            <div className="relative max-w-101 max-h-145.5 lg:h-145.5 lg:w-101 shrink-0 ">
              <CldImage alt="" src="slide-main" fill sizes="" />
              <div className="relative flex w-full h-full items-end p-6">
                <div className="p-8 bg-white/72">
                  <p className="font-medium text-[16px] text-[#616161]">
                    01 &mdash; Bed Room
                  </p>
                  <p className="text-title font-semibold text-[23px]">
                    Inner Peace
                  </p>
                </div>
                <Button
                  size={"icon-xl"}
                  className={"rounded-none shadow-none "}
                >
                  <ArrowRight className="size-6" />
                </Button>
              </div>
            </div>

            <div className="hidden lg:block md:mr-[calc(50%-50vw)] min-w-0  flex-1 ">
              <LandingCarousel />
            </div>
          </section>
        </div>
      </section>

      <section className="h-195 mb-12.5">
        <div className="flex flex-col items-center ">
          <h3 className="text-[#616161] text-[20px] font-semibold">
            Share your setup with
          </h3>
          <h1 className="text-title text-[40px]  font-bold">
            #FuniroFurniture
          </h1>
        </div>

        <LandingGallery />
      </section>
      <Footer />
    </div>
  );
}
