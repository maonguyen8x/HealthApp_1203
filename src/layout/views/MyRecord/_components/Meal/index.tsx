import images from "../../../../../frontend-images";

const Meal = () => {
  return (
    <div className="center gap-[84px]">
      <div className="relative">
        <img src={images.hexagon} alt="hexagon" />
        <div className="absolute inset-0 center flex-col">
          <img src={images.icon_knife} alt="icon_knife" />
          <p className="pt-1 text-xl leading-6 text-white">{`Morning`}</p>
        </div>
      </div>
      <div className="relative">
        <img src={images.hexagon} alt="hexagon" />
        <div className="absolute inset-0 center flex-col">
          <img src={images.icon_knife} alt="icon_knife" />
          <p className="pt-1 text-xl leading-6 text-white">{`Lunch`}</p>
        </div>
      </div>
      <div className="relative">
        <img src={images.hexagon} alt="hexagon" />
        <div className="absolute inset-0 center flex-col">
          <img src={images.icon_knife} alt="icon_knife" />
          <p className="pt-1 text-xl leading-6 text-white">{`Dinner`}</p>
        </div>
      </div>
      <div className="relative">
        <img src={images.hexagon} alt="hexagon" />
        <div className="absolute inset-0 center flex-col">
          <img src={images.icon_cup} alt="icon_cup" />
          <p className="pt-1 text-xl leading-6 text-white">{`Snack`}</p>
        </div>
      </div>
    </div>
  );
};

export default Meal;
