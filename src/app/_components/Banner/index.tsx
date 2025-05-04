"use client";

import { useEffect, useState } from "react";
import HeaderContainer from "./HeaderContainer";
import Hero from "./Hero";

function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
      className="relative w-screen h-screen flex flex-col lg:pb-[3vh] overflow-x-hidden"
      onClick={() => {
        if (isMobile) setIsMenuOpen(false);
      }}
    >
      <HeaderContainer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
    </div>
  );
}
export default Banner;
