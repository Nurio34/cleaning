import Link from "next/link";
import { NavItemType } from "..";

function NavLink({
  item,
  currentPath,
}: {
  item: NavItemType;
  currentPath: string;
}) {
  const { label, href } = item;

  return (
    <Link
      href={href}
      className={`text-lg btn btn-ghost hover:bg-primary hover:text-base-100 capitalize
            ${
              currentPath === href
                ? "underline underline-offset-4 font-bold text-xl"
                : ""
            }
        `}
      style={{ fontVariant: "small-caps" }}
    >
      {label}
    </Link>
  );
}
export default NavLink;
