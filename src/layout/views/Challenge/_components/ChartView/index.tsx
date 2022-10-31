import Chart from "src/components/Chart";

const ChartView = () => {
  return (
    <div className="my-20 bg-gray1 pt-16 pb-12 relative">
      <div className="absolute top-0 pt-4 px-4 row gap-8">
        <p className="whitespace-pre text-[15px] leading-[18px] text-white">{`BODY\nRECORD`}</p>
        <p className="text-[22px] leading-[27px] text-white">{`2021.05.21`}</p>
      </div>
      <Chart className="bg-gray1 h-[35vh] px-14" />
      <div className="absolute bottom-0 pb-4 px-10 row gap-4">
        <button className="bg-white rounded-[12px] min-w-[40px] px-5 py-[1px] shadow">
          <p className="pt-0 text-yellow text-[15px] leading-[22px] font-light">{`日`}</p>
        </button>
        <button className="bg-white rounded-[12px] min-w-[40px] px-5 py-[1px] shadow">
          <p className="pt-0 text-yellow text-[15px] leading-[22px] font-light">{`週`}</p>
        </button>
        <button className="bg-white rounded-[12px] min-w-[40px] px-5 py-[1px] shadow">
          <p className="pt-0 text-yellow text-[15px] leading-[22px] font-light">{`月`}</p>
        </button>
        <button className="bg-yellow rounded-[12px] min-w-[40px] px-5 py-[1px] shadow">
          <p className="pt-0 text-white text-[15px] leading-[22px] font-light">{`年`}</p>
        </button>
      </div>
    </div>
  );
};

export default ChartView;
