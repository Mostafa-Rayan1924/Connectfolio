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
              <Link
                className="flex items-center gap-2 mb-4 hover:text-primary "
                href={`/profile/${user.user.id}`}>
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
                <h2 className="font-semibold">{user?.user?.name}</h2>
              </Link>
            )}
            {linksArr.map((item) => {
              return <LinkLi item={item} user={user} />;
            })}

            <div className="mt-6">
              <CreatePost />
            </div>
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
