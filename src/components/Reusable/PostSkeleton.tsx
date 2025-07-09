const PostSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 pb-3 border-b border-border">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center  max-w-[50%]  gap-2">
          <div className="size-10 rounded-full bg-accent animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <div className="w-10 h-1 bg-accent animate-pulse" />
            <div className="w-8 h-1 bg-accent animate-pulse" />
          </div>
        </div>
      </div>
      {/* end header */}
      {/* body */}

      <div className="w-full h-[300px] md:h-[350px] lg:h-[450px] bg-accent rounded-lg animate-pulse"></div>
      {/* end body */}
      {/* footer */}
      <div className="flex items-start justify-between ">
        <div className="flex flex-col gap-1 max-w-[80%] md:max-w-full ">
          <div className="w-10 h-1 bg-accent animate-pulse" />
          <p className="w-16 h-1 bg-accent animate-pulse"></p>
        </div>
        <div className="size-8 bg-accent animate-pulse" />
      </div>
      {/* end footer */}
    </div>
  );
};

export default PostSkeleton;
