import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import EditPost from "./EditPost";
import { PostType } from "@/types/type";
import DeletePost from "./DeletePost";

const PostActions = ({ item }: { item: PostType }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 hover:bg-accent cursor-pointer rounded-full">
          <Ellipsis className="w-5 h-5 " />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <EditPost item={item} />
        <DeletePost item={item} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostActions;
