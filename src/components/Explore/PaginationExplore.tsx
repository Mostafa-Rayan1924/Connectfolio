"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const PaginationExplore = ({
  pageNum,
  lastPage,
}: {
  pageNum: number;
  lastPage: number;
}) => {
  const router = useRouter();

  const handlePrev = () => {
    if (pageNum > 1) {
      router.push(`/explore?page=${+pageNum - 1}`);
    }
  };

  const handleNext = () => {
    if (pageNum < lastPage) {
      router.push(`/explore?page=${+pageNum + 1}`);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Button onClick={handlePrev} disabled={+pageNum === 1} variant="outline">
        Prev
      </Button>
      <Button
        onClick={handleNext}
        disabled={+pageNum === lastPage}
        variant="outline">
        Next
      </Button>
    </div>
  );
};

export default PaginationExplore;
