import { getPosts } from "@/api/api";
import OnePost from "./OnePost";
import { PostType } from "@/types/type";

const PostsList = async () => {
  let posts: PostType[] = await getPosts();
  return (
    <div className="w-full space-y-4 pb-5">
      {posts.map((item: PostType) => (
        <OnePost item={item} />
      ))}
    </div>
  );
};

export default PostsList;
