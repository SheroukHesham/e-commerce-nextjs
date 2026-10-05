import { FOOTER_ITEMS } from "@/data";
import Link from "next/link";

const Footer = () => {
  const renderFooterItems = FOOTER_ITEMS.map((item, idx) => {
    return (
      <div key={idx} className="flex flex-col gap-y-11.5">
        <h3 className="text-[#9F9F9F] text-[16px] font-medium mb-2.25">
          {item.title}
        </h3>
        {idx === 2 ? (
          <div className="flex gap-x-9.5 ">
            {item.links.map((link, index) => {
              return (
                <Link
                  key={index}
                  className={`font-medium text-[16px] hover:cursor-pointer underline underline-offset-5 ${index === 0 && "text-[#9F9F9F]"}`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        ) : (
          item.links.map((link, index) => {
            return (
              <Link
                key={index}
                className={`font-medium text-[16px] hover:cursor-pointer `}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })
        )}
      </div>
    );
  });
  return (
    <div className="flex flex-col h-126.25">
      <div className="relative w-full flex flex-col lg:flex-row gap-y-10 gap-x-34 border-t border-t-[#000000]/17  px-25 pt-12 pb-9.5 ">
        <div className="flex flex-col gap-y-12.5">
          <span className="font-bold text-[28px]">Funiro.</span>
          <p className="w-71.25 text-[#9F9F9F] text-[16px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5">
          {renderFooterItems}
        </div>
      </div>
      <div className="w-[90%] border-t border-t-[#D9D9D9] mx-auto py-8.75  ">
        2023 furino. All rights reverved
      </div>
    </div>
  );
};

export default Footer;
