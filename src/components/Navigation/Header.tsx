"use client";
import Image from "next/image";
import Logo from "../Reusable/Logo";
import SidebarPhone from "./SidebarPhone";
import SignupBtn from "./SignupBtn";
import { useContext } from "react";
import { Authcontext } from "@/lib/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Header = () => {
  let { user } = useContext(Authcontext);

  return (
    <header className="lg:hidden  block border-b  border-border   ">
      <div className=" containers py-4 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-3">
          <SidebarPhone />
          {user.user ? (
            <Link href={`/profile/${user.user.id}`}>
              <Avatar size="sm">
                <AvatarImage
                  src={
                    Object.keys(user?.user?.profile_image).length > 0
                      ? user?.user?.profile_image
                      : "/user.png"
                  }
                />
                <AvatarFallback>
                  <Image
                    width={40}
                    height={40}
                    className="w-full"
                    src={"/user.png"}
                    alt="profile-img"
                  />
                </AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <SignupBtn />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
