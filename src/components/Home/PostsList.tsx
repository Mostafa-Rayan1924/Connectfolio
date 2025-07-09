"use client";
import { getPosts } from "@/api/api";
import OnePost from "./OnePost";
import { PostType } from "@/types/type";
import { useContext, useEffect, useRef, useState } from "react";
import { Authcontext } from "@/lib/AuthContext";
import PostSkeleton from "../Reusable/PostSkeleton";
import { set } from "zod";

const PostsList = () => {
  let { posts, setPosts } = useContext(Authcontext);
  let [loading, setLoading] = useState(false);
  let [total, setTotal] = useState(0);
  let page = useRef(1);
  useEffect(() => {
    let getData = async () => {
      setLoading(true);
      let posts = await getPosts(page.current);
      setTotal(posts.meta.total);
      setPosts(posts.data);
      setLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    let handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        page.current++;
        let getData = async () => {
          let posts = await getPosts(page.current);
          setPosts((prev: PostType[]) => [...prev, ...posts.data]);
        };
        getData();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
