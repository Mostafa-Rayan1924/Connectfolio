import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { PostType } from "@/types/type";

const CommentBox = ({ item }: any) => {
  return (
    <div className="flex items-center gap-2 py-4 not-last:border-b  border-border   ">
      <Link href={`/profile/${item?.author?.id}`} className=" max-w-[50%]  ">
        <Avatar size="sm">
          <AvatarImage src={item?.author?.profile_image} />
          <AvatarFallback>
            <Image width={40} height={40} src={"/user.png"} alt="profile-img" />
          </AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-col gap-1">
        <div className="flex  gap-2">
          <h3 className="text-sm font-semibold line-clamp-1">
            {item?.author?.username}
          </h3>
          <span className="text-xs mt-[2px] text-muted-foreground">
            {item?.comments}
          </span>
        </div>
        <p className="text-sm text-muted-foreground ">{item?.body}</p>
      </div>
    </div>
  );
};

export default CommentBox;
