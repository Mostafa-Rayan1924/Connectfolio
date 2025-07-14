"use client";
import { UserType } from "@/lib/AuthContext";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

const UpdateProfile = ({
  user,
  icon: Icon,
  href,
  title,
  desc,
}: {
  user?: UserType;
  icon?: LucideIcon;
  href: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      {user?.user && user?.user?.profile_image !== "" && (
        <Link href={href}>
          <img
            onError={(e) => (e.currentTarget.src = "/user.png")}
            className="size-16 aspect-square rounded-full ring-2 ring-offset-2 ring-offset-background ring-primary "
            src={user?.user?.profile_image}
            alt="post-img"
          />
        </Link>
      )}
      {Icon && (
        <Link
          href={href}
          className="bg-accent size-16 rounded-lg flex items-center justify-center">
          <Icon size={32} />
        </Link>
      )}
      <div>
        <h2 className="text-lg capitalize ">{title}</h2>
        <p className="text-xs capitalize text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default UpdateProfile;
