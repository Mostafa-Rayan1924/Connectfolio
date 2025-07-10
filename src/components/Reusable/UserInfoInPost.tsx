import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { PostType } from "@/types/type";

const UserInfoInPost = ({ item }: { item: PostType }) => {
  return (
    <Link
      href={`/profile/${item?.author?.id}`}
      className="flex items-center  max-w-[50%]  gap-2">
      <Avatar size="sm">
        <AvatarImage src={item?.author?.profile_image} />
        <AvatarFallback>
          <Image width={40} height={40} src={"/user.png"} alt="profile-img" />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm line-clamp-1">{item?.author?.username}</h3>
        <span className="text-xs text-muted-foreground">{item.created_at}</span>
      </div>
    </Link>
  );
};

export default UserInfoInPost;
