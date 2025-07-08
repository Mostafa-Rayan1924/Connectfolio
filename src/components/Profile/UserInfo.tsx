import UserBtn from "./UserBtn";
import { userType } from "@/types/type";
import UserInfoBox from "./UserInfoBox";
import Image from "./Image";

const UserInfo = ({ data }: { data: userType }) => {
  return (
    <div className="space-y-4">
      {/* user info  */}
      <div className="flex flex-col items-center gap-4 sm:flex-row justify-between">
        <div className="flex items-center gap-4">
          <div className="min-w-30 size-30 ">
            <Image data={data} />
          </div>
          <div className="space-y-[2px]">
            <h2 className=" font-semibold capitalize line-clamp-1">
              {data?.username}
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-1">
              {data?.email}
            </p>
            <p className="text-sm text-muted-foreground/85 line-clamp-1">
              Followed by <span className="text-primary">123</span> mutual
              friends
            </p>
          </div>
        </div>
        <UserBtn />
      </div>
      {/* user info 2 */}
      <div className="grid grid-cols-3 gap-2">
        <UserInfoBox number={data.posts_count} name="Posts" />
        <UserInfoBox number={data.comments_count} name="Comments" />
        <UserInfoBox number={"+99"} name="Followers" />
      </div>
    </div>
  );
};

export default UserInfo;
