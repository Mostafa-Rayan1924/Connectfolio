"use client";
import { useState, FormEvent, useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus, LoaderCircle, Upload, X } from "lucide-react";
import UserInfoAfterLoggedIn from "./UserInfoAfterLoggedIn";
import { Authcontext } from "@/lib/AuthContext";
import Image from "next/image";
import { Input } from "../ui/input";
import axios from "axios";
import { showCustomToast } from "./Toast";
import { PostType } from "@/types/type";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

const CreatePost = () => {
  let pathname = usePathname();
  let router = useRouter();
  const { user, setPosts } = useContext(Authcontext);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ⬅️ التحكم في فتح/غلق الـ Dialog

  const handlePost = async (e: FormEvent) => {
    e.preventDefault();
    const Authorization = `Bearer ${user.token}`;
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", desc);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
        formData,
        { headers: { Authorization } }
      );

      if (res.status === 201) {
        setPosts((prev: PostType[]) => [res.data.data, ...prev]);
        showCustomToast(
          "Post Created Successfully",
          res.data.data.body,
          res.data.data.image
        );
        setDesc("");
        setTitle("");
        setSelectedImage(null);
        scrollTo(0, 0);
        setIsOpen(false); // ⬅️ غلق الـ Dialog بعد النجاح
        if (pathname.includes("profile")) {
          router.refresh();
        }
      }
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)} // ⬅️ فتح الـ Dialog عند الضغط على الزر
            className="w-full cursor-pointer text-white bg-gradient-to-r text-[17px] from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium">
            <CirclePlus /> Post
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-y-auto">
          <DialogHeader className="text-center border-b border-border pb-4 flex items-center justify-center">
            <DialogTitle>Create post</DialogTitle>
          </DialogHeader>

          <UserInfoAfterLoggedIn show={false} />

          <div className="grid gap-3 space-y-2">
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              minLength={1}
              className="h-10 resize-none outline-none placeholder:text-xs  placeholder:sm:text-base"
              placeholder={`What's on your mind, ${user?.user?.username}? `}
            />
            {selectedImage && (
              <div className="p-1 relative border border-border rounded-md">
                <div
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 cursor-pointer bg-red-500 size-10 grid place-items-center rounded-full">
                  <X size={22} className="text-white" />
                </div>
                <Image
                  width={300}
                  height={300}
                  src={URL.createObjectURL(selectedImage)}
                  alt="profile-img"
                  className="w-full h-[300px] md:h-[450px] object-fill"
                />
              </div>
            )}
          </div>

          <DialogFooter>
            <div className="flex items-center w-full gap-4 justify-between">
              <Input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="w-[80%]"
                placeholder="Add title to your post"
              />
              <div className="w-[20%]">
                <input
                  type="file"
                  className="hidden"
                  id="fileInput"
                  accept="image/*"
                  onChange={(e) =>
                    setSelectedImage(e.target.files?.[0] || null)
                  }
                />
                <label
                  title="Upload image"
                  htmlFor="fileInput"
                  className="bg-accent hover:bg-accent/80 hover:scale-105 duration-300 w-full py-2 rounded-lg cursor-pointer inline-flex items-center justify-center">
                  <Upload size={25} />
                </label>
              </div>
            </div>
          </DialogFooter>

          <div>
            <Button
              disabled={desc.length < 1 || loading}
              onClick={handlePost}
              className="w-full"
              type="submit">
              {loading ? (
                <LoaderCircle size={20} className="text-white animate-spin" />
              ) : (
                "Post"
              )}
            </Button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default CreatePost;
