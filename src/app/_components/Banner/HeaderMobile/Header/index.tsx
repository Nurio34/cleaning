import { Dispatch, SetStateAction } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import { VisibleElType } from "../..";

function Header({
  isMenuOpen,
  setIsMenuOpen,
  visibleEl,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  visibleEl: VisibleElType;
}) {
  return (
    <div
      className={`fixed z-20 top-0 right-0 w-screen h-screen transition-transform
        flex justify-end
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      onClick={() => setIsMenuOpen(false)}
    >
      <header
        className={`bg-base-100 z-20 lg:relative max-w-min
        flex gap-y-[3vh] flex-col lg:flex-row lg:justify-between items-center
        px-[3vw] py-[3vh]  lg:py-0 h-screen lg:h-auto
       
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <Logo />
        <Navigation setIsMenuOpen={setIsMenuOpen} visibleEl={visibleEl} />
        <SocialLinks />
      </header>
    </div>
  );
}
export default Header;
