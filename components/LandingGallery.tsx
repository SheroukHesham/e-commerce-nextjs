import CldImage from "./CldImage";

const TILES = [
  { src: "gallery-1", className: "left-0 top-0 w-[274px] h-[382px]" },
  {
    src: "gallery-3",
    className: "left-[290px] top-[70px] w-[451px] h-[312px]",
  },
  {
    src: "gallery-5",
    className: "left-[757px] top-[156px] w-[295px] h-[392px]",
  },
  {
    src: "gallery-4",
    className: "left-[397px] top-[398px] w-[344px] h-[242px]",
  },
  { src: "gallery-2", className: "left-0 top-[398px] w-[381px] h-[323px]" },
  {
    src: "gallery-7",
    className: "left-[1068px] top-[99px] w-[290px] h-[348px]",
  },
  {
    src: "gallery-6",
    className: "left-[1068px] top-[463px] w-[178px] h-[242px]",
  },
  {
    src: "gallery-8",
    className: "left-[1262px] top-[463px] w-[258px] h-[196px]",
  },
  {
    src: "gallery-9",
    className: "left-[1374px] top-[14px] w-[425px] h-[433px]",
  },
];

export function LandingGallery() {
  return (
    <div className="relative h-[721px] w-full overflow-x-clip ">
      {/* "Images" frame: 1799×721, centered so it bleeds off both sides */}
      <div className="absolute left-1/2 top-0 h-[721px] w-[1799px] -translate-x-1/2">
        {TILES.map((tile) => (
          <div
            key={tile.src}
            className={`absolute overflow-hidden  ${tile.className}`}
          >
            <CldImage
              src={tile.src}
              alt=""
              fill
              sizes="450px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
