import { NEWS_DATA } from "../../../../../constant";

const Article = () => {
  return (
    <div className="py-7 grid grid-cols-4 gap-2">
      {NEWS_DATA.map((items, index) => (
        <div key={index} className="mb-2 flex flex-col space-y-2">
          <div className="relative">
            <img
              src={items.image}
              className="w-full h-full object-cover aspect-video"
              alt={items?.description || "image"}
            />
            <div className="absolute bottom-0 px-[10px] py-[7px] bg-yellow min-w-[120px] center">
              <p className="text-[15px] leading-[18px] text-white">
                {items?.time}
              </p>
            </div>
          </div>
          <span className="line-clamp-2 text-gray1 text-[15px] leading-[22px]">
            {items.description}
          </span>
          <div className="row gap-x-2">
            {items.tags.map((tag, index) => (
              <p
                className="text-orange text-[12px] leading-[22px] pt-0"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
