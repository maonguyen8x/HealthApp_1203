import React, { useCallback, useState } from "react";
import images from "../../frontend-images";
import { NavLink } from "react-router-dom";
import { SUB_MENU } from "../../constant";

const Header = () => {
  const [isSubMenu, setSubMenu] = useState(false);

  const onToggleSubMenu = useCallback(() => {
    setSubMenu(!isSubMenu);
  }, [isSubMenu]);

  return (
    <div className="w-full bg-gray1 h-16 fixed z-50">
      <div className="container row-between px-16">
        <NavLink to="/" className="center gap-3">
          <img src={images.logo} alt="logo" />
        </NavLink>
        <div className="row gap-16">
          <NavLink to="/my-record" className="center gap-3">
            <img src={images.icon_create} alt="icon_create" />
            <p className="text-base leading-6 text-white">{`自分の記録`}</p>
          </NavLink>
          <NavLink to="/challenge" className="center gap-3">
            <img src={images.icon_challenge} alt="icon_challenge" />
            <p className="text-base leading-6 text-white">{`チャレンジ`}</p>
          </NavLink>
          <NavLink to="/news" className="center gap-3">
            <div className="relative">
              <img src={images.icon_info} alt="icon_info" />
              <div className="absolute top-0 -right-2 w-4 h-4 rounded-full bg-orange2 center">
                <p className="text-[10px] text-white leading-3 font-normal">{`1`}</p>
              </div>
            </div>
            <p className="text-base leading-6 text-white">{`お知らせ`}</p>
          </NavLink>
          <div className="center gap-3 cursor-pointer relative">
            <img
              onClick={onToggleSubMenu}
              src={isSubMenu ? images.icon_close : images.icon_menu}
              alt="icon_menu"
            />
            {isSubMenu && (
              <div className="absolute flex flex-col justify-start items-start right-0 top-0 w-full mt-10 shadow min-w-[280px]">
                {SUB_MENU.map((items, index) => (
                  <button
                    key={index}
                    className="bg-gray2 w-full py-5 px-8 text-left border-t border-b border-t-white border-b-default border-opacity-25"
                  >
                    <p className="text-[18px] leading-[26px] text-white">
                      {items.value}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
