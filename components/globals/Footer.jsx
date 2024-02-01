import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const navigation = {
  social: [
    {
      name: "Youtube",
      href: "https://www.youtube.com/channel/UCZSFuQ0eoDxe8WXbt_th9zA",
      icon: (props) => <FaYoutube />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/lifteddotsite",
      icon: (props) => <FaTwitter />,
    },
    {
      name: "GitHub",
      href: "https://github.com/lifteddotsite/",
      icon: (props) => <FaGithub />,
    },

    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/lifteddotsite",
      icon: (props) => <FaLinkedin />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="">
      <Logo />
    </footer>
  );
}
