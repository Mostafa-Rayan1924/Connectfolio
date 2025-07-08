"use client";
import SureBtn from "../Auth/SureBtn";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Authcontext } from "@/lib/AuthContext";
import { DeleteIcon } from "lucide-react";
import { PostType } from "@/types/type";

const DeletePost = ({ item }: { item: PostType }) => {
  let { setPosts, user } = useContext(Authcontext);
  let handleDel = async () => {
    let Authorization = `Bearer ${user.token}`;
    try {
      let res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${item.id}`,
        {
          headers: {
            Authorization,
          },
        }
      );
      if (res.status === 200) {
        setPosts((prev: PostType[]) =>
          prev.filter((post: PostType) => post.id !== item.id)
        );
        toast.success("Post Deleted Successfully");
      }
    } catch (e: any) {
      if (e?.response?.data?.message) {
        toast.error(e?.response?.data?.message);
      }
    }
  };
  return (
    <SureBtn handleSure={handleDel} title="delete this post">
      <div className="flex cursor-pointer items-center px-2 py-[6px] text-sm hover:bg-accent rounded-md gap-2">
        <DeleteIcon size={18} className="  text-red-500" />
        <span className="text-muted-foreground">Delete Post</span>
      </div>
    </SureBtn>
  );
};

export default DeletePost;
