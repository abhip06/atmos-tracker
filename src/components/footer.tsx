import { CloudSun } from "lucide-react";
import { useTheme } from "./theme-provider";

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="border-t backdrop-blur py-16 supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col items-center justify-center gap-5 container mx-auto text-center text-gray-400">
        <div className="flex gap-1"
        >
          {/* <Mountain className="h-7 w-7 text-cyan-500" /> */}
          <CloudSun className="h-10 w-10 text-orange-500" />
          <div className="flex justify-center items-center text-2xl font-thin">
            <h2 className="text-orange-500">Atmos</h2>
            <h2 className={`${isDark ? "text-white" : "text-gray-800"}`}>Tracker</h2>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <span><a href="https://github.com/abhip06"><FaGithub className="w-6 h-6" /></a></span>
          <span><a href="https://www.linkedin.com/in/abhinav-patel-38480b254/"><CiLinkedin className="w-6 h-6" /></a></span>
          <span><a href="https://x.com/abhip006"><RiTwitterXFill className="w-6 h-6" /></a></span>
        </div>
        <div className="text-center text-sm">
          Made with ❤️ by Abhinav.
        </div>
      </div>
    </footer>
  )
}

export default Footer;