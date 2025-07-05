import ExploreUsers from "@/components/Home/ExploreUsers";
import PostsList from "@/components/Home/PostsList";
import Sidebar from "@/components/Navigation/Sidebar";

export default function Home() {
  return (
    <>
      {/* parent of sidebar + content */}
      <div className="flex items-start justify-between gap-8 containers    ">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-full lg:w-4/5 pt-3 lg:pt-0 lg:ps-2 space-y-6 ">
          <ExploreUsers />
          <PostsList />
        </div>
      </div>
    </>
  );
}
