"use client";

import NavLink from "./NavLink";
import { Dispatch, SetStateAction } from "react";
import { VisibleElType } from "../../..";

export type NavItemType = {
  name: string;
  label: string;
  href: string;
};

const navItems: NavItemType[] = [
  {
    name: "home",
    label: "ana-sayfa",
    href: "/#ana-sayfa",
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

function Navigation({
  setIsMenuOpen,
  visibleEl,
}: {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  visibleEl: VisibleElType;
}) {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-center gap-x-[3vw]">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            item={item}
            setIsMenuOpen={setIsMenuOpen}
            visibleEl={visibleEl}
          />
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
