import { getOnePost } from "@/api/api";
import HeaderPages from "@/components/Navigation/HeaderPages";
import CommentBox from "@/components/Reusable/CommentBox";
import CommentsTable from "@/components/Reusable/CommentsTable";
import SendComment from "@/components/Reusable/SendComment";
import UserInfoInPost from "@/components/Reusable/UserInfoInPost";
import { PostType } from "@/types/type";
import { MessageCircleMoreIcon } from "lucide-react";
import Image from "next/image";
import ImgPost from "./ImgPost";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let data: PostType = await getOnePost(+id);
  return (
    <div className="pb-10">
      <HeaderPages />
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-6 sm:mt-10 space-y-6 ">
        {/* post content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* post image */}
          <ImgPost data={data} />
          {/* post info */}
          <div className="space-y-2">
            <div className="flex items-center justify-between ">
              <UserInfoInPost item={data} />
              <div className="flex items-center gap-1">
                <MessageCircleMoreIcon className="text-primary" size={22} />
                {data?.comments_count}
              </div>
            </div>
            <h3 className="text-2xl">{data?.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {data?.body}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MessageCircleMoreIcon className="text-primary" size={22} />
          <h2 className="text-2xl font-semibold">Comments </h2>
        </div>
        {/* comments table */}
        <CommentsTable data={data} />
        <SendComment item={data} id={+id} />
      </div>
    </div>
  );
};

export default page;
