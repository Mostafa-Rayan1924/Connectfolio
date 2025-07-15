"use client";
import { Authcontext } from "@/lib/AuthContext";
import { PostType } from "@/types/type";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import PostActions from "../Reusable/PostActions";
import UserInfoInPost from "../Reusable/UserInfoInPost";
import ImagePost from "./ImagePost";
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
      <ImagePost item={item} />
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
