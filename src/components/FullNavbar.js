import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import ThemeButton from "./ThemeButton";
// import { useTheme } from "@nextui-org/react";
// import { useTheme as useNextTheme } from "next-themes";

export default function FullNavbar() {
  //   const navItems = [ "Skills", "Projects", "Contact",];
  // const { setTheme } = useNextTheme();
  // const { isDark, Type } = useTheme();
  const navItems = [
    { name: "Skills", link: "/skillsPage" },
    { name: "Projects", link: "/projectsPage" },
    { name: "Writings", link: "/blogPage" },
    { name: "About", link: "/aboutPage" },
  ];

  const [mobileNav, setMobileNav] = useState(false);

  const responsiveNavBar = () => {
    mobileNav != mobileNav
    setMobileNav(mobileNav);
  }

  return (

    <nav className="fixed mx-auto z-10 top-0 left-0 right-0 light:bg-white dark:bg-black-600 backdrop-blur-md dark: bg-opacity-50 dark:bg-opacity-50 w-full py-6 ">
      {/* <div className="flex justify-between items-center space-x-4 p-4"> */}
      <div className="flex container flex-wrap items-center  justify-center">
        <div className="flex flex-row w-3/4 justify-between">
          <Link href="/">
            <p className="text-xl lg:text-4xl font-thin light:text-slate-400 hover:text-blue-500 ">P | K</p>
          </Link>

          <ThemeButton />

        </div>
        <div className="flex flex-row w-3/4 justify-center items-center lg:space-x-4">
          {navItems &&
            navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="p-6 "
              >
                <p className="font-thin text-xl lg:text-3xl light:text-slate-400 hover:text-blue-500 "> {item.name}</p>
              </Link>
            ))}
        </div>


      </div>

    </nav>
  );
}
