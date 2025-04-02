import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

function Header({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <header
      className={`absolute top-0 right-0 bg-base-100 z-20 lg:relative 
        flex gap-y-[3vh] flex-col lg:flex-row lg:justify-between items-center
        p-[3vh] lg:p-0 h-screen lg:h-auto
        transition-transform
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <Logo />
      <Navigation />
      <SocialLinks />
    </header>
  );
}
export default Header;
