import { Dispatch, SetStateAction } from "react";
import Header from "./Header";
import MenuButton from "./MenuButton";

function HeaderContainer({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <MenuButton setIsMenuOpen={setIsMenuOpen} />
      <Header isMenuOpen={isMenuOpen} />
    </>
  );
}
export default HeaderContainer;
