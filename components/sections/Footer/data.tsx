import { FaInstagram, FaBehance } from "react-icons/fa";

export const navigation = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (props: any) => <FaInstagram {...props} />,
  },
  {
    name: "behance",
    href: "https://www.behance.net",
    icon: (props: any) => <FaBehance {...props} />,
  },
];
