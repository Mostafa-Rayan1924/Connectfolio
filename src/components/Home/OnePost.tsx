"use client";
import { Authcontext } from "@/lib/AuthContext";
import { PostType } from "@/types/type";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import PostActions from "../Reusable/PostActions";
import UserInfoInPost from "../Reusable/UserInfoInPost";
const OnePost = ({ item }: { item: PostType }) => {
  let { user } = useContext(Authcontext);

  return (
    <div className="flex flex-col gap-3 pb-3 border-b border-border">
      {/* header */}
      <div className="flex items-center justify-between">
        <UserInfoInPost item={item} />

        {item?.author?.id === user?.user?.id && <PostActions item={item} />}
      </div>
      {/* end header */}
      {/* body */}
      {Object.keys(item?.image).length > 0 && (
        <Link
          href={`/post/${item?.id}`}
          className="w-full h-[300px] md:h-[350px] lg:h-[450px]">
          <img
            onError={(e) => (e.currentTarget.src = "/post.png")}
            className="size-full aspect-video rounded-lg object-fill"
            src={item?.image}
            alt="post-img"
          />
        </Link>
      )}
      {/* end body */}
      {/* footer */}
      <Link
        href={`/post/${item?.id}`}
        className="flex items-start justify-between ">
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
      </Link>
      {/* end footer */}
    </div>
  );
};

export default OnePost;
