"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorProps) => {
  console.log(error);
  return (
    <section style={{ marginTop: "140px" }} className=" containers !mb-10">
      <div className="border-4 max-w-4xl mx-auto border-dotted py-20 space-y-4 text-center rounded-lg ">
        <h2 className="text-base  capitalize sm:text-3xl font-bold text-red-500">
          Something went wrong
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base capitalize">
          Error Message: {error?.message}
        </p>
        <Button variant="destructive" size={"lg"} onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </section>
  );
};

export default ErrorComponent;
