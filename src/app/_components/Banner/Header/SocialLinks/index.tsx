import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "instagram",
    href: "#",
    logo: <FaInstagramSquare className="text-2xl" />,
  },
  {
    name: "x",
    href: "#",
    logo: <FaSquareXTwitter className="text-2xl" />,
  },
  {
    name: "facebook",
    href: "#",
    logo: <FaFacebookSquare className="text-2xl" />,
  },
];

function SocialLinks() {
  return (
    <ul className="flex items-center gap-x-[1vw]">
      {socialLinks.map((link) => (
        <li key={link.name} className=" transition-all hover:scale-125">
          <Link href={link.href}>{link.logo}</Link>
        </li>
      ))}
    </ul>
  );
}
export default SocialLinks;
