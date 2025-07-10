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
import LinkLi from "../Reusable/Link";
const SidebarPhone = () => {
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
          <div className="space-y-3">
            {linksArr.map((item) => (
              <LinkLi item={item} user={user} />
            ))}
          </div>
          {user?.user && (
            <div className="mt-3">
              <CreatePost />
            </div>
          )}
        </ul>
        <SheetFooter className="border-t border-border">
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
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarPhone;
