import { getUsers } from "@/api/api";
import ExploreUserBox from "@/components/Explore/ExploreUserBox";
import PaginationExplore from "@/components/Explore/PaginationExplore";
import HeaderPages from "@/components/Navigation/HeaderPages";
import { userType } from "@/types/type";
import { Compass } from "lucide-react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) => {
  const { page } = (await searchParams) || 1;

  let pageNum = page;
  let data = await getUsers(pageNum);
  let lastPage = data.meta.last_page;
  return (
    <div className="pb-10">
      <HeaderPages />
      <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto mt-10 space-y-6 ">
        <div className="flex items-center gap-2 border-b-2 relative before:absolute before:content-[''] before:left-0 before:-bottom-[1px] before:w-50 before:h-[1px] before:z-20 before:bg-primary be border-border pb-4">
          <Compass className="text-primary" size={22} />
          <h2 className="text-2xl font-semibold">Explore People</h2>
        </div>
        {data.data.map((item: userType) => (
          <ExploreUserBox item={item} />
        ))}
        <PaginationExplore pageNum={pageNum} lastPage={lastPage} />
      </div>
    </div>
  );
};

export default page;
