import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { UserType } from "@/lib/AuthContext";

const UserProfileNav = ({ user }: { user: UserType }) => {
  return (
    <Link
      className="flex items-center gap-2  hover:text-primary "
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
      <h2 className="font-semibold line-clamp-1">{user?.user?.username}</h2>
    </Link>
  );
};

export default UserProfileNav;
