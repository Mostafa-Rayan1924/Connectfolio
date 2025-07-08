"use client";
import { Authcontext, UserType } from "@/lib/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { useContext } from "react";
import { Divide, LogOut } from "lucide-react";
import SureBtn from "../Auth/SureBtn";
import { Button } from "../ui/button";
const UserInfoAfterLoggedIn = ({ show }: { show: boolean }) => {
  let { user, LogoutFunc } = useContext(Authcontext);
  let handleLogout = () => {
    LogoutFunc();
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 ">
        <Avatar size="sm">
          <AvatarImage
            src={
              Object.keys(user?.user?.profile_image).length > 0
                ? user?.user?.profile_image
                : "/user.png"
            }
          />
          <AvatarFallback>
            <Image width={40} height={40} src={"/user.png"} alt="profile-img" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-[2px] max-w-[70%] ">
          <h3 className="text-sm overflow-hidden text-ellipsis whitespace-nowra">
            {user?.user?.username}
          </h3>
          <span className="text-xs text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap   ">
            {user?.user?.email}
          </span>
        </div>
      </div>
      {show && (
        <div>
          <SureBtn handleSure={handleLogout} title="Logout">
            <Button className="w-full" variant="outline">
              <LogOut />
            </Button>
          </SureBtn>
        </div>
      )}
    </div>
  );
};

export default UserInfoAfterLoggedIn;
