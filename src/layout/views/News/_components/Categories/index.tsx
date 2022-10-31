import { RECOMMENT_DATA } from "../../../../../constant";

const Categories = () => {
  return (
    <div className="grid grid-cols-4 gap-8 mb-7">
      {RECOMMENT_DATA.map((items, index) => (
        <div
          key={index}
          className="relative col whitespace-pre text-center gap-3 bg-default w-full h-full p-6"
        >
          <p className="text-[22px] text-yellow leading-[28px]">
            {items.title}
          </p>
          <div className="h-[1px] bg-white w-1/3" />
          <p className="text-[18px] leading-[26px] text-white">
            {items.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
