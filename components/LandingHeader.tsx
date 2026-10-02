import { Button } from "./ui/button";
import CldImage from "./CldImage";

const LandingHeader = () => {
  return (
    <section className=" w-full h-179 relative z-0 overflow-hidden">
      <CldImage
        src="scandinavian-interior-mockup-wall-decal-background_1"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />

      <div className="relative z-10 h-full flex flex-col items-end justify-center  px-14.5">
        <div className="w-160 h-110 bg-section-background flex flex-col justify-center rounded-lg px-10 py-15 gap-y-4">
          <h3 className="text-[#333333] font-bold text-lg">New Arrival</h3>
          <h1 className="text-4xl font-bold text-section-foreground md:text-6xl ">
            Discover Our New Collection
          </h1>
          <p className="text-[#333333] text-lg font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button size={"lg"} className={"w-fit"}>
            BUY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingHeader;
