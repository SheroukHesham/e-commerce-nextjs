import HeaderBanner from "@/components/HeaderBanner";

const Shop = () => {
  return (
    <div>
      <HeaderBanner
        title="Shop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
        ]}
      />
      <div className="w-full px-25 py-6.25 bg-primary-background flex items-center  ">
        <div className="text-[20px]">Filter</div>
      </div>
    </div>
  );
};

export default Shop;
