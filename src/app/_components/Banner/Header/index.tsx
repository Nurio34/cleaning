import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header
      className={`bg-base-100 px-[3vw]
        hidden lg:flex gap-y-[3vh] justify-between items-center
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
