"use client";
import { PostType } from "@/types/type";
import React from "react";

const ImgPost = ({ data }: { data: PostType }) => {
  return (
    <div className="size-full">
      <img
        onError={(e) => (e.currentTarget.src = "/post.png")}
        width={500}
        height={500}
        src={
          Object.keys(data?.image).length > 0 || data?.image !== ""
            ? data?.image
            : "/post.png"
        }
        alt="post-img"
        className="w-full h-[300px]  shadow rounded-lg object-fill"
      />
    </div>
  );
};

export default ImgPost;
