import Link from "next/link";
import { NavItemType } from "..";

function NavLink({ item }: { item: NavItemType }) {
  const { label, name, href } = item;

  return (
    <li>
      <Link
        href={href}
        className={`text-lg btn btn-ghost hover:bg-primary hover:text-base-100 capitalize
            ${
              name === "home"
                ? "underline underline-offset-4 font-bold text-xl"
                : ""
            }
        `}
        style={{ fontVariant: "small-caps" }}
      >
        {label}
      </Link>
    </li>
  );
}
export default NavLink;
