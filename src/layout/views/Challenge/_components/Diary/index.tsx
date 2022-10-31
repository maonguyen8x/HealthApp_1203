
const Diary = () => {
  return (
    <div>
      <p className="text-[22px] leading-[28px] text-gray1 p-1">{`MY DIARY`}</p>
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div
            key={index}
            className="p-4 border border-gray3 aspect-square w-full h-full"
          >
            <div className="col items-start mb-2">
              <p className="text-[18px] leading-[22px] text-gray1">{`2021.05.21`}</p>
              <p className="text-[18px] leading-[22px] text-gray1">{`23:25`}</p>
            </div>
            <p className="text-[12px] leading-[18px] text-gray1">{`私の日記の記録が一部表示されます。`}</p>
            <p className="text-[12px] leading-[18px] text-gray1 line-clamp-5">
              {`テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスキストテキストテキストテキストテキストテキスキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスキストテキストテキストテキストテキストテキスキストテキストテキストテキストテキストテキスキストテキストテキストテキストテキストテキス`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
