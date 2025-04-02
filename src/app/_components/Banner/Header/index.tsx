import Logo from "./Logo";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Navigation />
      <SocialLinks />
    </header>
  );
}
export default Header;
