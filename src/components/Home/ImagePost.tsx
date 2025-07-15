"use client";
import { PostType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ImagePost = ({ item }: { item: PostType }) => {
  const [imgSrc, setImgSrc] = useState(item?.image || "/post.png");

  return (
    <>
      {Object.keys(item?.image).length > 0 && (
        <Link
          href={`/post/${item?.id}`}
          className="w-full h-[300px] md:h-[350px] lg:h-[450px]">
          <Image
            src={imgSrc}
            alt="post-img"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL="/load.png"
            className="size-full aspect-video rounded-lg object-fill"
            onError={() => setImgSrc("/post.png")}
          />
        </Link>
      )}
    </>
  );
};

export default ImagePost;
