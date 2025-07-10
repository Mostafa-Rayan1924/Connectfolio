import Link from "next/link";
import { Button } from "../ui/button";

const PaginationExplore = ({
  pageNum,
  lastPage,
}: {
  pageNum: number;
  lastPage: number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <Button disabled={+pageNum === 1} variant={"outline"}>
        <Link className="size-full" href={`explore?page=${+pageNum - 1}`}>
          Prev
        </Link>
      </Button>
      <Button disabled={+pageNum === +lastPage} variant={"outline"}>
        <Link href={`explore?page=${+pageNum + 1}`}>Next</Link>
      </Button>
    </div>
  );
};

export default PaginationExplore;
