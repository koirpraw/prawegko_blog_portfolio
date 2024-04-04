import Link from "next/link";

const titles = ["Blog", "Projects", "Skills", "About"];

export default function FooterNavLinks() {
  return (
    <div className="w-[30%]">
      <div className="flex flex-row justify-between items-center ">
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
