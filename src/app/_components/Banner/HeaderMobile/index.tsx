import { Dispatch, SetStateAction } from "react";
import MenuButton from "./MenuButton";
import Header from "./Header";
import { VisibleElType } from "..";

function HeaderMobile({
  isMenuOpen,
  setIsMenuOpen,
  visibleEl,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  visibleEl: VisibleElType;
}) {
  return (
    <div className="lg:hidden">
      <MenuButton setIsMenuOpen={setIsMenuOpen} />
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        visibleEl={visibleEl}
      />
    </div>
  );
}
export default HeaderMobile;
