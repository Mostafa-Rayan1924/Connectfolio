"use client";
import Logo from "@/components/Reusable/Logo";
import { linksArr } from "@/constants/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CreatePost from "../Reusable/CreatePost";
import { useContext } from "react";
import { Authcontext } from "@/lib/AuthContext";
import UserInfoAfterLoggedIn from "../Reusable/UserInfoAfterLoggedIn";
import { LogIn } from "lucide-react";
import LinkLi from "../Reusable/Link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import UserProfileNav from "../Reusable/UserProfileNav";

const Sidebar = () => {
  let pathName = usePathname();
  let { user } = useContext(Authcontext);

  return (
    <div className="sidebar h-screen w-1/5 lg:block lg:sticky lg:top-6 hidden     ">
      <div className="size-full flex flex-col  justify-between   ">
        <div>
          <div className="mb-6">
            <Logo />
          </div>
          <ul>
            {user?.user && (
              <div className="mb-4">
                <UserProfileNav user={user} />
              </div>
            )}
            <div className="space-y-3">
              {linksArr.map((item) => {
                return <LinkLi item={item} user={user} />;
              })}
            </div>

            {user?.user && (
              <div className="mt-6">
                <CreatePost />
              </div>
            )}
          </ul>
        </div>
        <div className="pb-3">
          {user?.user ? (
            <UserInfoAfterLoggedIn show={true} />
          ) : (
            <h2 className="font-semibold capitalize flex items-center justify-center gap-2">
              Join to Connectfolio
              <Link href="/login">
                <LogIn className="text-primary hover:rotate-180 duration-300" />
              </Link>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
