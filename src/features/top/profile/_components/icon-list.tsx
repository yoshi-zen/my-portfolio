import { SiFacebook, SiGithub, SiInstagram, SiX } from "react-icons/si";

const Icons = [
  {
    name: "github",
    icon: <SiGithub className="text-gray-800" />,
  },
  {
    name: "x",
    icon: <SiX className="text-gray-800" />,
  },
  {
    name: "instagram",
    icon: <SiInstagram className="text-gray-800" />,
  },
  {
    name: "facebook",
    icon: <SiFacebook className="text-gray-800" />,
  },
];

export const IconList = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Icons.map((icon) => (
        <div key={icon.name} className="flex aspect-square w-[20px] items-center justify-center">
          {icon.icon}
        </div>
      ))}
    </div>
  );
};
