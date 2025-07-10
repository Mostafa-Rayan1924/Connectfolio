"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Send } from "lucide-react";
import { FormEvent, useContext, useState } from "react";
import axios from "axios";
import { Authcontext } from "@/lib/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const SendComment = ({ item, id }: { item: any; id: number }) => {
  console.log(item);
  let [inp, setInp] = useState("");
  let [loading, setLoading] = useState(false);
  let router = useRouter();
  let { user } = useContext(Authcontext);
  let params = {
    body: inp,
  };
  let Authorization = `Bearer ${user.token}`;
  let handleAddComment = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}/comments`,
      params,
      {
        headers: {
          Authorization,
        },
      }
    );
    if (res.status === 201) {
      setLoading(false);
      toast.success("Comment Added Successfully");
      setInp("");
      router.refresh();
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Avatar size="sm">
        <AvatarImage src={user?.user?.profile_image} />
        <AvatarFallback>
          <Image width={40} height={40} src={"/user.png"} alt="profile-img" />
        </AvatarFallback>
      </Avatar>
      <form
        className="flex items-center gap-2 w-full"
        onSubmit={handleAddComment}>
        <Input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          placeholder="Send a comment"
          className="bg-accent"
        />
        <Button disabled={inp === "" || loading} size={"icon"}>
          {loading ? <Loader2 className="animate-spin " /> : <Send />}
        </Button>
      </form>
    </div>
  );
};

export default SendComment;
