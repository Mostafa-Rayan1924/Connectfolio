import Sidebar from "@/components/Navigation/Sidebar";
import Boxes from "@/components/Settings/Boxes";
import React from "react";

const page = () => {
  return (
    <>
      {/* parent of sidebar + content */}
      <div className="flex items-start justify-between gap-8 containers    ">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-full lg:w-4/5 pt-3 lg:pt-0 lg:ps-2 space-y-6 ">
          <Boxes />
        </div>
      </div>
    </>
  );
};

export default page;
