import Link from "next/link";

const titles = ["Blog", "Projects", "Skills", "About"];

export default function FooterNavLinks() {
  return (
    <div className="w-1/2">
      <div className="flex flex-row justify-center items-center space-x-8 sm:space-x-12 ">
        {titles &&
          titles.map((title) => (
            <Link
              key={title}
              href={`/${title.toLowerCase()}Page`}

            >
              <p className="font-regular text-gray-400 hover:text-blue-500 ">{title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
