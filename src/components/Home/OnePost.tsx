"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostType } from "@/types/type";
import { Ellipsis, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const OnePost = ({ item }: { item: PostType }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* header */}
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center  max-w-[50%]  gap-2">
          <Avatar size="sm">
            <AvatarImage src={item?.author?.profile_image} />
            <AvatarFallback>
              <Image
                width={40}
                height={40}
                src={"/user.png"}
                alt="profile-img"
              />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm line-clamp-1">{item?.author?.username}</h3>
            <span className="text-xs text-muted-foreground">
              {item.created_at}
            </span>
          </div>
        </Link>
        <div>
          <Ellipsis size={20} />
        </div>
      </div>
      {/* end header */}
      {/* body */}
      <div className="w-full h-[300px] md:h-[350px] lg:h-[450px]">
        <Image
          width={500}
          height={500}
          className="size-full aspect-square rounded-lg object-fill"
          src={Object.keys(item.image).length > 0 ? item?.image : "/post.png"}
          alt="profile-img"
        />
      </div>
      {/* end body */}
      {/* footer */}
      <div className="flex items-start justify-between ">
        <div className="flex flex-col gap-1 max-w-[80%] md:max-w-full ">
          {item.title && <h2>{item?.title}</h2>}
          <p className="line-clamp-1 text-sm text-muted-foreground">
            {item?.body}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="text-primary" size={22} />
          <span>{item?.comments_count}</span>
        </div>
      </div>
      {/* end footer */}
    </div>
  );
};

export default OnePost;
