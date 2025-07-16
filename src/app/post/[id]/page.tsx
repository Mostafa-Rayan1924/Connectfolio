import { getOnePost } from "@/api/api";
import HeaderPages from "@/components/Navigation/HeaderPages";
import type { Metadata, ResolvingMetadata } from "next";
import CommentsTable from "@/components/Reusable/CommentsTable";
import SendComment from "@/components/Reusable/SendComment";
import UserInfoInPost from "@/components/Reusable/UserInfoInPost";
import { PostType } from "@/types/type";
import { MessageCircleMoreIcon } from "lucide-react";
import ImgPost from "./ImgPost";
type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const post: PostType = await getOnePost(+id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.title !== "" ? post?.title : post?.body,
    openGraph: {
      images: ["/post.png", ...previousImages],
    },
  };
}
const page = async ({ params }: Props) => {
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
