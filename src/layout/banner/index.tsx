import images from "../../images";
import ChartView from "../views/Challenge/_components/Chart";

const Banner = () => {
  return (
    <div className="grid grid-cols-12 pt-16 overflow-hidden">
      <div className="col-span-5">
        <img
          className="w-full object-cover h-full"
          src={images.main_photo}
          alt="main_photo"
        />
      </div>
      <div className="col-span-7 bg-gray2">
        <ChartView />
      </div>
    </div>
  );
};

export default Banner;
