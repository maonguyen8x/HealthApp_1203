
const Footer = () => {
  return (
    <div className="w-full bg-gray1 h-32 row my-auto px-0">
      <div className="container flex gap-[45px]">
        <a
          href="#"
          className="text-[11px] leading-4 text-white"
        >{`会員登録`}</a>
        <a
          href="#"
          className="text-[11px] leading-4 text-white"
        >{`運営会社`}</a>
        <a
          href="#"
          className="text-[11px] leading-4 text-white"
        >{`利用規約`}</a>
        <a
          href="#"
          className="text-[11px] leading-4 text-white"
        >{`個人情報の取扱について`}</a>
        <a
          href="#"
          className="text-[11px] leading-4 text-white"
        >{`特定商取引法に基づく表記`}</a>
        <a
          href="#"
          className="text-[11px] leading-4 text-white"
        >{`お問い合わせ`}</a>
      </div>
    </div>
  );
};

export default Footer;
