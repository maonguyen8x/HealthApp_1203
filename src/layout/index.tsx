import React, { ReactChild, useCallback } from "react";
import images from "../frontend-images";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: ReactChild }) => {
  const location = useLocation();
  const isShowBanner = location?.pathname === "/my-record";

  const onMoveTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      {isShowBanner && <Banner />}
      <div className="container py-[22px] px-16 relative">
        {children}
        <div
          onClick={onMoveTop}
          className="absolute right-0 bottom-40 cursor-pointer"
        >
          <img src={images.icon_up} alt="icon_up" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
