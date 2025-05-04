import { UserButton, useUser } from "@clerk/nextjs";
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
  // {
  //   name: "login",
  //   href: "/sign-in",
  //   logo: <RiAdminFill className="text-2xl" />,
  // },
];

function SocialLinks() {
  const { user } = useUser();

  return (
    <ul className="flex items-center gap-x-[1vw]">
      {socialLinks.map((link) => {
        if (link.name === "login") {
          if (!user) {
            return (
              <li key={link.name} className=" transition-all hover:scale-125">
                <Link href={link.href}>{link.logo}</Link>
              </li>
            );
          } else {
            return (
              <li key={link.name}>
                <UserButton />
              </li>
            );
          }
        }
        return (
          <li key={link.name} className=" transition-all hover:scale-125">
            <Link href={link.href}>{link.logo}</Link>
          </li>
        );
      })}
    </ul>
  );
}
export default SocialLinks;
