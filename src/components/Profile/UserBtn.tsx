"use client";
import { FormEvent } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { BookMarked } from "lucide-react";

const UserBtn = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={(e: FormEvent) => {
          e.preventDefault();
          toast.custom((t) => (
            <div className="border text-sm border-border rounded-lg flex items-center justify-center gap-1  p-4 bg-accent ">
              <BookMarked className="text-primary" /> This feature is coming
              soon
            </div>
          ));
        }}
        size={"lg"}>
        Follow
      </Button>
      <Button
        onClick={(e: FormEvent) => {
          e.preventDefault();
          toast.custom((t) => (
            <div className="border text-sm border-border rounded-lg flex items-center justify-center gap-1  p-4 bg-accent ">
              <BookMarked className="text-primary" /> This feature is coming
              soon
            </div>
          ));
        }}
        variant={"outline"}
        size={"lg"}>
        Message
      </Button>
    </div>
  );
};

export default UserBtn;
