import { Dispatch, SetStateAction } from "react";
import { IoMdMenu } from "react-icons/io";

function MenuButton({
  setIsMenuOpen,
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      type="button"
      className="block lg:hidden absolute z-10 top-2 right-2 cursor-pointer transition-transform hover:scale-105"
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
      }}
    >
      <IoMdMenu size={28} />
    </button>
  );
}
export default MenuButton;
