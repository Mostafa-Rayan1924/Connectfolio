"use client";

import Image from "next/image";
import { useState } from "react";
import { PostType } from "@/types/type";

const ImgPost = ({ data }: { data: PostType }) => {
  const [imgSrc, setImgSrc] = useState(data?.image || "/post.png");

  return (
    <Image
      src={imgSrc}
      alt="post-img"
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL="/load.png"
      className="w-full h-[300px] shadow rounded-lg object-fill"
      onError={() => setImgSrc("/post.png")}
    />
  );
};

export default ImgPost;
