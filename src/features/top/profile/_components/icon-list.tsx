import Link from "next/link";
import { SiFacebook, SiGithub, SiInstagram, SiX } from "react-icons/si";

const Icons = [
  {
    name: "github",
    icon: <SiGithub className="text-gray-800" />,
    href: "https://github.com/yoshi-zen",
  },
  {
    name: "x",
    icon: <SiX className="text-gray-800" />,
    href: "https://x.com/yor48614",
  },
  {
    name: "instagram",
    icon: <SiInstagram className="text-gray-800" />,
    href: "https://instagram.com/yzen_photo",
  },
  {
    name: "facebook",
    icon: <SiFacebook className="text-gray-800" />,
    href: "https://www.facebook.com/share/3DCp47FXUbK8yZ8v/?mibextid=LQQJ4d",
  },
];

export const IconList = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      {Icons.map((icon) => (
        <Link
          key={icon.name}
          href={icon.href}
          className="flex aspect-square w-[20px] items-center justify-center"
          rel="noopener noreferrer"
          target="_blank">
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};
