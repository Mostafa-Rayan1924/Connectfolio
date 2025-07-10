"use client";
import React, { useState } from "react";
import CommentBox from "./CommentBox";
import { PostType } from "@/types/type";

const CommentsTable = ({ data }: { data: PostType }) => {
  let [show, setShow] = useState(false);
  let comments = show ? data.comments : data.comments.slice(0, 5);
  return (
    <div>
      {data.comments.length > 0 ? (
        comments.map((item: any) => <CommentBox key={item?.id} item={item} />)
      ) : (
        <h2 className="text-xl font-semibold">No Comments Yet!</h2>
      )}
      {data.comments.length > 5 && (
        <div
          onClick={() => setShow(!show)}
          className="text-center mt-3
        cursor-pointer">
          {show ? <h2>Show less</h2> : <h2>Show more</h2>}
        </div>
      )}
    </div>
  );
};

export default CommentsTable;
