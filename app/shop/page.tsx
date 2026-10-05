import DisplayProducts from "@/components/DisplayProducts";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import HeaderBanner from "@/components/HeaderBanner";
import { SHOP_BANNER } from "@/data";

import {
  AlignVerticalSpaceAround,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";

const Shop = async () => {
  const renderBannerItems = SHOP_BANNER.map((item, idx) => {
    const Icon = item.icon;

    return (
      <div key={idx} className="flex items-center justify-center gap-2">
        <Icon className="size-20 shrink-0" strokeWidth={1.5} />
        <div className="flex flex-col gap-2">
          <h3 className="text-[25px] font-semibold">{item.title}</h3>
          <h4 className="text-[20px] font-medium text-[#898989]">
            {item.description}
          </h4>
        </div>
      </div>
    );
  });

  return (
    <div>
      <HeaderBanner
        title="Shop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
        ]}
      />

      <div className="w-full px-25 py-6.25 bg-primary-background flex items-center justify-between  ">
        <div className="flex items-center gap-6">
          <div className="text-[20px] flex  items-center gap-2 ">
            <SlidersHorizontal size={25} />
            Filter
          </div>
          <LayoutGrid size={25} />
          <AlignVerticalSpaceAround size={25} />
          <div className="border-l-2 border-l-[#9F9F9F] pl-8.5 py-1.75">
            Showing 1-16 of 32 results
          </div>
        </div>
        <Filter />
      </div>

      <DisplayProducts />

      <div className="w-full bg-primary-background flex items-center justify-between py-25 px-15 mt-21.25">
        {renderBannerItems}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
