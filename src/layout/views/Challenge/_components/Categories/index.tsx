import { CHALLENGE_DATA } from "../../../../../constant";

const Categories = () => {
  return (
    <div className="grid grid-cols-3 gap-12 mb-7">
      {CHALLENGE_DATA.map((items, index) => (
        <div key={index} className="relative w-full h-full">
          <img
            src={items.image}
            alt={items?.title || "image"}
            className="aspect-square w-full h-full border-[24px] border-yellow bg-black bg-opacity-95 mix-blend-luminosity"
          />
          <div className="absolute inset-0 center flex-col gap-3">
            <p className="text-[25px] text-yellow leading-[30px] letter-spacing-0125">
              {items.title}
            </p>
            <div className="bg-orange min-w-[160px] text-center">
              <p className="text-[14px] leading-[20px] text-white p-1">
                {items.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
