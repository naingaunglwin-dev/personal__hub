import { FaGithub, FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full border-t border-gray-200 bg-white">
      <div
        className="
          px-6 py-10
          max-w-6xl mx-auto
          grid gap-10
          text-center
          md:text-left
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {/* Brand */}
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
          <span className="text-2xl lg:text-3xl font-medium">
            Naing Aung Lwin
          </span>
          <span className="text-gray-600">Web Developer</span>
        </div>

        {/* Links */}
        <div className="flex justify-center md:justify-start gap-14">
          <ul className="space-y-3 text-start">
            <li className="text-xl">Social</li>
            <li className="cursor-pointer">
              <a href="https://github.com/naingaunglwin-dev" target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-60">
                <FaGithub/>github
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://www.instagram.com/naingaunglwinn" target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-60">
                <FaInstagram/>instagram
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://t.me/naingaunglwin" target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-60">
                <FaTelegramPlane/>telegram
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="www.linkedin.com/in/naing-aung-lwin-8b55473a9" target="_blank" className="flex items-center gap-1 text-sm opacity-80 hover:opacity-60">
                <FaLinkedin/>linkedin
              </a>
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="text-xl">Websites</li>
            <li>
              <a
                href="https://yay-chin-yar-yay.vercel.app/"
                target="_blank"
                className="text-sm opacity-80 hover:opacity-60"
              >
                yay chin yar yay
              </a>
            </li>
            <li>
              <a
                href="https://the-daily-quest.vercel.app/"
                target="_blank"
                className="text-sm opacity-80 hover:opacity-60"
              >
                daily quest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
