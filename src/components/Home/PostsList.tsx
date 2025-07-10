"use client";

import useFetchPosts from "../Reusable/FetchPosts";
import PostSkeleton from "../Reusable/PostSkeleton";
import OnePost from "./OnePost";
import { PostType } from "@/types/type";
const PostsList = () => {
  const { posts, loading } = useFetchPosts();
  return (
    <div className="w-full space-y-4 pb-5">
      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))
        : ""}
      {posts.map((item: PostType) => (
        <OnePost key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostsList;
