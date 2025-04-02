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
    label: "Kurumsal",
    href: "/kurumsal",
  },
  {
    name: "services",
    label: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
  },
  {
    name: "reference",
    label: "Referanslar",
    href: "/referanslar",
  },
  {
    name: "communication",
    label: "İletişim",
    href: "/iletisim",
  },
];

function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-x-[3vw]">
        {navItems.map((item) => (
          <NavLink key={item.name} item={item} currentPath={path} />
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
