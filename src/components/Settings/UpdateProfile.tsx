"use client";
import { UserType } from "@/lib/AuthContext";
import Link from "next/link";
import { BookMarked, LucideIcon } from "lucide-react";
import { FormEvent } from "react";
import toast from "react-hot-toast";

const UpdateProfile = ({
  user,
  icon: Icon,
  title,
  desc,
}: {
  user?: UserType;
  icon?: LucideIcon;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex items-center gap-4">
      {user?.user && user?.user?.profile_image !== "" && (
        <div
          className="cursor-pointer"
          onClick={(e: FormEvent) => {
            e.preventDefault();
            toast.custom((t) => (
              <div className="border text-sm border-border rounded-lg flex items-center justify-center gap-1  p-4 bg-accent ">
                <BookMarked className="text-primary" /> This feature is coming
                soon
              </div>
            ));
          }}>
          <img
            onError={(e) => (e.currentTarget.src = "/user.png")}
            className="size-16 aspect-square rounded-full ring-2 ring-offset-2 ring-offset-background ring-primary "
            src={user?.user?.profile_image}
            alt="post-img"
          />
        </div>
      )}
      {Icon && (
        <div
          onClick={(e: FormEvent) => {
            e.preventDefault();
            toast.custom((t) => (
              <div className="border text-sm border-border rounded-lg flex items-center justify-center gap-1  p-4 bg-accent ">
                <BookMarked className="text-primary" /> This feature is coming
                soon
              </div>
            ));
          }}
          className="bg-accent cursor-pointer size-16 rounded-lg flex items-center justify-center">
          <Icon size={32} />
        </div>
      )}
      <div>
        <h2 className="text-lg capitalize ">{title}</h2>
        <p className="text-xs capitalize text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

export default UpdateProfile;
