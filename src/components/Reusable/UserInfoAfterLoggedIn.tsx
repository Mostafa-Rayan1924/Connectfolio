import { UserType } from "@/lib/AuthContext";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Logout from "../Auth/Logout";
const UserInfoAfterLoggedIn = ({ user }: { user: UserType }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 ">
        <Avatar size="sm">
          <AvatarImage
            src={
              Object.keys(user?.user?.profile_image).length > 0
                ? user?.user?.profile_image
                : "/user.png"
            }
          />
          <AvatarFallback>
            <Image width={40} height={40} src={"/user.png"} alt="profile-img" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-[2px] max-w-[70%] ">
          <h3 className="text-sm line-clamp-1">{user?.user?.username}</h3>
          <span className="text-xs text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap   ">
            {user?.user?.email}
          </span>
        </div>
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
};

export default UserInfoAfterLoggedIn;
