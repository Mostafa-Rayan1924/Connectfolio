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
            {linksArr.map((item) => {
              return (
                <Link
                  href={item.link}
                  className={`text-[13px] ${
                    pathName === item.link && "bg-accent "
                  } flex items-center mb-2 ${
                    user?.user && item.title === "Signup" ? "hidden" : "flex"
                  } relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-accent before:transition-all before:duration-300 hover:before:w-full before:rounded-lg before:-z-1  gap-2 py-2 px-3 rounded-lg`}>
                  <item.icon size={22} />
                  {item.title}
                </Link>
              );
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
