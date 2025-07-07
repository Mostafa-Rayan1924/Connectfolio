"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../Reusable/Logo";
import { linksArr } from "@/constants/Links";
import CreatePost from "../Reusable/CreatePost";
import { useContext } from "react";
import { Authcontext } from "@/lib/AuthContext";
import UserInfoAfterLoggedIn from "../Reusable/UserInfoAfterLoggedIn";
const SidebarPhone = () => {
  let pathname = usePathname();
  let [open, setOpen] = useState(false);
  let { user } = useContext(Authcontext);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="size-8 cursor-pointer hover:transform hover:scale-110 duration-300 " />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader
          className="border-b border-border "
          onClick={() => setOpen(!open)}>
          <SheetTitle className="mt-4 ">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <ul className=" px-2">
          {linksArr.map((item) => (
            <Link
              href={item.link}
              className={`text-[13px] ${
                pathname === item.link && "bg-accent "
              } flex items-center mb-3 ${
                user?.user && item.title === "Signup" ? "hidden" : "flex"
              } relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-accent before:transition-all before:duration-300 hover:before:w-full before:rounded-lg before:-z-1  gap-2 py-2 px-3 rounded-lg`}>
              <item.icon size={22} />
              {item.title}
            </Link>
          ))}
          <CreatePost />
        </ul>
        <SheetFooter className="border-t border-border">
          {user?.user ? (
            <UserInfoAfterLoggedIn user={user} />
          ) : (
            <h2 className="font-semibold capitalize flex items-center justify-center gap-2">
              Join to Connectfolio
              <Link href="/login">
                <LogIn className="text-primary hover:rotate-180 duration-300" />
              </Link>
            </h2>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarPhone;
