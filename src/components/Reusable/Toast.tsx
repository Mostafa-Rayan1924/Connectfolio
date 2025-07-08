"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function showCustomToast(
  message: string,
  username: string,
  imageUrl: string
) {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-background z-40  shadow-lg rounded-lg pointer-events-auto flex border border-border `}>
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Avatar size="sm">
              <AvatarImage src={imageUrl} />
              <AvatarFallback>
                <Image
                  width={40}
                  height={40}
                  src={"/user.png"}
                  alt="profile-img"
                />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium line-clamp-1 ">{username}</p>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
}
