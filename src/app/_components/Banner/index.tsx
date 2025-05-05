"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import useMultipleElementsScrollObserver from "@/app/utils/observer/useScrollIntoViewObserver";

export type VisibleElType =
  | "ana-sayfa"
  | "kurumsal"
  | "hizmetlerimiz"
  | "referanslar"
  | "iletişim";

function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleEl, setVisibleEl] = useState<VisibleElType>("ana-sayfa");

  useMultipleElementsScrollObserver(setVisibleEl);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMobile(false);
      else setIsMobile(true);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) setIsMenuOpen(false);
    else setIsMenuOpen(true);
  }, [isMobile]);

  return (
    <div
      id="ana-sayfa"
      className="relative w-screen h-screen flex flex-col overflow-x-hidden"
      onClick={() => {
        if (isMobile) setIsMenuOpen(false);
      }}
    >
      {!isMobile && <Header />}

      {isMobile && (
        <HeaderMobile
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          visibleEl={visibleEl}
        />
      )}
      <Hero />
    </div>
  );
}
export default Banner;
