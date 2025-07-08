"use client";

const Image = ({ data }: { data: any }) => {
  return (
    <img
      src={data?.profile_image !== "" ? data?.profile_image : "/user.png"}
      onError={(e: any) => (e.target.src = "/user.png")}
      width={80}
      height={80}
      className="size-full rounded-full "
      alt="profile-img"
    />
  );
};

export default Image;
