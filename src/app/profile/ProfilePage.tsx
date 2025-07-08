import Sidebar from "@/components/Navigation/Sidebar";
import UserInfo from "@/components/Profile/UserInfo";
import { getPostsOfUser, getUserInfo } from "@/api/api";
import { PostType } from "@/types/type";
import OnePost from "@/components/Home/OnePost";
const ProfilePage = async ({ id }: { id: string }) => {
  let data = await getUserInfo(+id);
  let posts = await getPostsOfUser(+id);
  return (
    <>
      {/* parent of sidebar + content */}
      <div className="flex items-start justify-between gap-8 containers    ">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-full lg:w-4/5 pt-3 lg:pt-0 lg:ps-2 space-y-6 ">
          <UserInfo data={data} />
          <div className="w-full border-border border-b pb-4">
            <h2 className="text-center text-3xl font-semibold">Posts</h2>
          </div>
          <div className="lg:max-w-[80%] mx-auto space-y-4">
            {posts.length > 0 ? (
              posts.map((item: PostType) => (
                <OnePost key={item.id} item={item} />
              ))
            ) : (
              <h2 className="text-center">No Posts Yet!</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
