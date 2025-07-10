"use client";
import { linksArr } from "@/constants/Links";
import Logo from "../Reusable/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Authcontext } from "@/lib/AuthContext";
import { useContext } from "react";
import LinkLi from "../Reusable/Link";
import UserProfileNav from "../Reusable/UserProfileNav";

const HeaderPages = () => {
  let pathName = usePathname();
  let { user } = useContext(Authcontext);

  return (
    <header className="lg:block hidden border-b border-border pb-6">
      <div className="containers flex items-center justify-between ">
        <Logo />
        <ul className="flex items-center gap-2 ">
          {linksArr.map((item) => (
            <LinkLi item={item} user={user} />
          ))}
        </ul>
        {user.user && <UserProfileNav user={user} />}
      </div>
    </header>
  );
};

export default HeaderPages;
