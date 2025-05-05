import Link from "next/link";
import { NavItemType } from "..";
import { Dispatch, SetStateAction } from "react";
import { VisibleElType } from "@/app/_components/Banner";

function NavLink({
  item,
  setIsMenuOpen,
  visibleEl,
}: {
  item: NavItemType;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  visibleEl: VisibleElType;
}) {
  const { label, href } = item;

  return (
    <li>
      <Link
        href={href}
        className={`text-lg btn btn-ghost hover:bg-primary hover:text-base-100 capitalize
            ${
              visibleEl === label
                ? "underline underline-offset-4 font-bold text-xl"
                : ""
            }
        `}
        style={{ fontVariant: "small-caps" }}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </Link>
    </li>
  );
}
export default NavLink;
