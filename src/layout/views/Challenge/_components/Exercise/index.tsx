
const Exercise = () => {
  return (
    <div className="bg-gray1 my-7 px-6 py-4 w-full h-[265px]">
      <div className="row gap-8">
        <p className="whitespace-pre text-[15px] leading-[18px] text-white">{`MY\nEXERCISE`}</p>
        <p className="text-[22px] leading-[27px] text-white">{`2021.05.21`}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 exercies overflow-hidden overflow-x-hidden overflow-y-scroll h-[200px] mt-2">
        {[
          1, 2, 3, 4, 5, 1, 2, 3, 4, 12, 3, 4, 32, 3, 4, 5, 3, 52, 4, 2, 5, 2,
          2, 4, 3, 453, 23,
        ].map((_, index) => (
          <ul key={index} className="list-disc ml-5 mr-8">
            <li className="text-white border-b border-gray2">
              <div className="row-between">
                <p className="text-[15px] leading-[22px] text-white">
                  {`家事全般（立位・軽い）`}
                </p>
                <p className="text-[18px] leading-[22px] text-yellow mr-4">
                  {`10 min`}
                </p>
              </div>
              <p className="text-[15px] leading-[18px] text-yellow">
                {`26kcal`}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
