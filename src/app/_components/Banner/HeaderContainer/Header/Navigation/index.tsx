"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export type NavItemType = {
  name: string;
  label: string;
  href: string;
};

const navItems: NavItemType[] = [
  {
    name: "home",
    label: "Ana Sayfa",
    href: "/",
  },
  {
    name: "corporate",
    label: "kurumsal",
    href: "/#kurumsal",
  },
  {
    name: "services",
    label: "hizmetlerimiz",
    href: "/#hizmetlerimiz",
  },
  {
    name: "reference",
    label: "referanslar",
    href: "/#referanslar",
  },
  {
    name: "communication",
    label: "iletişim",
    href: "/#iletişim",
  },
];

function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-center gap-x-[3vw]">
        {navItems.map((item) => (
          <NavLink key={item.name} item={item} currentPath={path} />
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
