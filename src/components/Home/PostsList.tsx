"use client";
import { getPosts } from "@/api/api";
import OnePost from "./OnePost";
import { PostType } from "@/types/type";
import { useContext, useEffect } from "react";
import { Authcontext } from "@/lib/AuthContext";

const PostsList = () => {
  let { posts, setPosts } = useContext(Authcontext);
  useEffect(() => {
    let getData = async () => {
      let posts = await getPosts();
      setPosts(posts);
    };
    getData();
  }, []);
  return (
    <div className="w-full space-y-4 pb-5">
      {posts.map((item: PostType) => (
        <OnePost key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostsList;
