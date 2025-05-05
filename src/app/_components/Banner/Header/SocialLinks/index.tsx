import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "instagram",
    href: "#",
    logo: "/logo/instagram.webp",
    label: "Instagram hesabımızı ziyaret edin.",
  },
  {
    name: "x",
    href: "#",
    logo: "/logo/x.webp",
    label: "X hesabımızı ziyaret edin.",
  },
  {
    name: "facebook",
    href: "#",
    logo: "/logo/facebook.webp",
    label: "Facebook hesabımızı ziyaret edin.",
  },
];

function SocialLinks() {
  return (
    <ul className="flex items-center gap-x-[1vw]">
      {socialLinks.map((link) => (
        <li
          key={link.name}
          className=" transition-all hover:scale-125 rounded-md overflow-hidden"
        >
          <Link href={link.href} aria-label={link.label}>
            <Image
              src={link.logo}
              width={28}
              height={28}
              alt={`${link.name} logo`}
              sizes="28px"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default SocialLinks;
