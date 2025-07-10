import { userType } from "@/types/type";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

const ExploreUserBox = ({ item }: { item: userType }) => {
  return (
    <div className="flex hover:bg-accent  items-center border-b border-border rounded-lg duration-300 p-4 gap-2 justify-between">
      <Link
        href={`/profile/${item?.id}`}
        className="flex items-center gap-2 max-w-[70%]">
        <Avatar size="lg">
          <AvatarImage
            src={item?.profile_image !== "" ? item?.profile_image : "/user.png"}
          />
          <AvatarFallback>
            <Image width={80} height={80} src={"/user.png"} alt="profile-img" />
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1 w-full  ">
          <h3 className="text-sm line-clamp-1">{item?.username}</h3>
          <p className="text-xs  text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap  ">
            {item?.email}
          </p>
        </div>
      </Link>
      <div className="md:block hidden">
        <Link href={`/profile/${item?.id}`}>
          <Button variant={"outline"}>Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreUserBox;
