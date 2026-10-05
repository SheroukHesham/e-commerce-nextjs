import cloudinaryLoader from "@/lib/cloudinary";
import { BreadCrumb } from "./BreadCrumb";

interface IProps {
  title: string;
}
const HeaderBanner = ({ title }: IProps) => {
  console.log(process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL + "/header-banner");
  return (
    <div
      className={`w-full  lg:h-90 flex flex-col items-center justify-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/w1gzdawt/image/upload//header-banner')]`}
    >
      <h1 className="font-medium text-[48px] mb-2">{title}</h1>
      <BreadCrumb
        sortedNavList={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
        ]}
      />
    </div>
  );
};

export default HeaderBanner;
