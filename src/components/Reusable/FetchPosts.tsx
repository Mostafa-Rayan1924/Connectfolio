"use client";
import { getPosts } from "@/api/api";
import { useContext, useEffect, useRef, useState } from "react";
import { Authcontext } from "@/lib/AuthContext";
import { PostType } from "@/types/type";

let useFetchPosts = () => {
  let { posts, setPosts } = useContext(Authcontext);
  let [loading, setLoading] = useState(false);
  let page = useRef(1);
  //   get posts at first time
  useEffect(() => {
    let getData = async () => {
      setLoading(true);
      let posts = await getPosts(page.current);
      setPosts(posts.data);
      setLoading(false);
    };
    getData();
  }, []);
  //   posts pagination (infinite scroll)
  useEffect(() => {
    let handleScroll = () => {
      if (
        !loading &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 100
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
  return { posts, loading };
};
export default useFetchPosts;
