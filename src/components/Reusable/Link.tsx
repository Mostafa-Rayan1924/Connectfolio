"use client";
import { linksType, userType } from "@/types/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkLi = ({
  item,
  user,
}: {
  item: linksType;
  user: { user: userType };
}) => {
  let pathname = usePathname();
  return (
    <Link
      href={item.link}
      className={`text-[13px] ${
        pathname === item.link && "bg-accent "
      } flex items-center mb-3 ${
        user?.user && item.title === "Signup" ? "hidden" : "flex"
      }  relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-accent before:transition-all before:duration-300 hover:before:w-full before:rounded-lg before:-z-1  gap-2 py-2 px-3 rounded-lg`}>
      <item.icon size={22} />
      {item.title}
    </Link>
  );
};

export default LinkLi;
