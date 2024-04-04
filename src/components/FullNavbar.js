import Link from "next/link";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
// import { useTheme } from "@nextui-org/react";
// import { useTheme as useNextTheme } from "next-themes";

export default function FullNavbar() {
  //   const navItems = [ "Skills", "Projects", "Contact",];
  // const { setTheme } = useNextTheme();
  // const { isDark, Type } = useTheme();
  const navItems = [
    { name: "Skills", link: "/skillsPage" },
    { name: "Projects", link: "/projectsPage" },
    { name: "Blog", link: "/blogPage" },
    { name: "About", link: "/aboutPage" },
  ];

  return (
    <nav className="fixed mx-auto z-10 top-0 left-0 right-0 bg-white backdrop-blur-md bg-opacity-50 w-full ">
      {/* <div className="flex justify-between items-center space-x-4 p-4"> */}
      <div className="flex container flex-wrap items-center justify-evenly mx-auto px-4 py-6  space-x-6">
        <div className=" space-x-4">
          <Link href="/">
            <p className="text-4xl text-slate-600 font-light  hover:text-blue-500 ">P | K</p>
          </Link>
        </div>
        <div className="flex space-x-4">
          {navItems &&
            navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="p-6 "
              >
                <p className="font-light text-2xl text-slate-600 hover:text-blue-500 "> {item.name}</p>
              </Link>
            ))}
        </div>
        <div>
          <Button >
            <Sun className="w-6 h-6" />
            {/* <Moon className="w-6 h-6" /> */}
          </Button>
        </div>
      </div>

      {/* </div> */}
    </nav>
  );
}