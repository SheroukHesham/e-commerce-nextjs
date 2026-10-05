import { INavItem } from "@/interfaces";
import { BreadCrumb } from "./BreadCrumb";

interface IProps {
  title: string;
  breadcrumbs: INavItem[];
}
const HeaderBanner = ({ title, breadcrumbs }: IProps) => {
  return (
    <div
      className={`w-full  lg:h-90 flex flex-col items-center justify-center bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/w1gzdawt/image/upload//header-banner')]`}
    >
      <h1 className="font-medium text-[48px] mb-2">{title}</h1>
      <BreadCrumb sortedNavList={breadcrumbs} />
    </div>
  );
};

export default HeaderBanner;
