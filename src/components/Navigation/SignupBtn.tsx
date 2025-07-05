import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignupBtn = () => {
  return (
    <Link
      href={"/signup"}
      className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
      <div className="inline-flex h-8 text-sm translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
        Sign up
      </div>
      <div className="absolute inline-flex h-8 text-sm w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
        <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
        <span className="z-10">
          <CircleUserRound />
        </span>
      </div>
    </Link>
  );
};

export default SignupBtn;
