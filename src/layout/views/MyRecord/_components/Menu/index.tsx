import { MEMU_DATA } from "../../../../../constant";

const Memu = () => {
  return (
    <>
      <div className="grid grid-cols-4 pt-[25px] gap-2">
        {MEMU_DATA.map((items, index) => (
          <div key={index} className="relative">
            <img
              src={items.image}
              className="w-full h-full object-cover aspect-square"
              alt={items?.value || "image"}
            />
            <div className="absolute bottom-0 px-[10px] py-[7px] bg-yellow min-w-[120px] center">
              <p className="text-[15px] leading-[18px] text-white">
                {items?.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Memu;
