"use client";
import { useContext } from "react";
import UpdateProfile from "./UpdateProfile";
import { Authcontext } from "@/lib/AuthContext";
import { User } from "lucide-react";
import Mode from "./Mode";
import { Button } from "../ui/button";
import SureBtn from "../Auth/SureBtn";
import Link from "next/link";

const Boxes = () => {
  let { user, LogoutFunc } = useContext(Authcontext);
  let handleLogout = () => {
    LogoutFunc();
  };
  return (
    <div>
      {user.user ? (
        <div className="space-y-8 md:space-y-6">
          <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold">
            Settings
          </h2>
          <UpdateProfile
            user={user}
            title={"Profile Picture"}
            desc={"mangage your profile picture"}
          />
          <UpdateProfile
            title={"Personal Information"}
            desc={"Update your personal information"}
            icon={User}
          />
          <Mode />
          <SureBtn handleSure={handleLogout} title="Logout">
            <Button variant={"destructive"} className="w-full md:w-1/4">
              Logout
            </Button>
          </SureBtn>
        </div>
      ) : (
        <div className=" h-[80vh] flex items-center justify-center flex-col gap-4 ">
          <h2 className="text-2xl   md:text-3xl text-center font-semibold">
            Login to see your settings
          </h2>
          <Link className="w-[200px]" href="/login">
            <Button className="w-full ">Login</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Boxes;
