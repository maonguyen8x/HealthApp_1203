import images from "../../frontend-images";
import Chart from "../../components/Chart";
// @ts-ignore
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const Banner = () => {
  const props = {
    percent: 75, // is require
    colorSlice: "#ffffff",
    fontColor: "#ffffff",
    fontWeight: 400,
    size: 181,
    speed: 500,
    stroke: 2,
  };

  return (
    <div className="grid grid-cols-12 pt-16 overflow-hidden">
      <div className="col-span-5 relative center">
        <div className="absolute">
          <CircularProgressBar {...props}>
            <div className="absolute center inset-0 gap-1">
              <p className="pt-1 text-[18px] leading-[22px] font-normal text-white circle-number">{`05/21`}</p>
              <p className="text-[25px] leading-[30px] font-normal text-white circle-number">{`75%`}</p>
            </div>
          </CircularProgressBar>
        </div>
        <img
          className="w-full object-cover h-[40vh]"
          src={images.main_photo}
          alt="main_photo"
        />
      </div>
      <div className="col-span-7 bg-gray2">
        <Chart className="bg-gray1 h-[40vh] py-4 px-16" />
      </div>
    </div>
  );
};

export default Banner;
