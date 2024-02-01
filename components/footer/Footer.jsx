import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../logo/Logo";

const navigation = {
  social: [
    {
      name: "Youtube",
      href: "https://www.youtube.com/@saigon.digital",
      icon: (props) => <FaYoutube />,
    },
    {
      name: "GitHub",
      href: "https://github.com/LamHoangCatVy/insta-card",
      icon: (props) => <FaGithub />,
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/saigon-digital/",
      icon: (props) => <FaLinkedin />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="flex space-x-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              {item.icon({ className: "h-6 w-6" })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
