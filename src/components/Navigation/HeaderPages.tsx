"use client";
import { linksArr } from "@/constants/Links";
import Logo from "../Reusable/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderPages = () => {
  let pathName = usePathname();

  return (
    <header className="lg:block hidden border-b border-border pb-6">
      <div className="containers flex items-center justify-between ">
        <Logo />
        <ul className="flex items-center gap-3 ">
          {linksArr.map((item) => (
            <Link
              href={item.link}
              className={`text-[13px] ${
                pathName === item.link && "bg-accent "
              } flex items-center  relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-accent before:transition-all before:duration-300 hover:before:w-full before:rounded-lg before:-z-1  gap-2 py-2 px-3 rounded-lg`}>
              <item.icon size={22} />
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default HeaderPages;
