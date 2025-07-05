"use client";
import { userType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PersonExp = ({ data }: { data: userType[] }) => {
  return (
    <>
      {data.map((user: userType) => (
        <Link
          href={"#"}
          key={user?.id}
          className="flex flex-col gap-2 items-center ">
          <Avatar size="lg">
            <AvatarImage src={user?.profile_image} />
            <AvatarFallback>
              <Image
                width={80}
                height={80}
                src={"/user.png"}
                alt="profile-img"
              />
            </AvatarFallback>
          </Avatar>

          <h2 className="line-clamp-1 text-[12px]">{user?.name}</h2>
        </Link>
      ))}
    </>
  );
};

export default PersonExp;
