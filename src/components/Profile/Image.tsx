"use client";
import { useState } from "react";

const Image = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageSrc =
    data?.profile_image !== "" ? data?.profile_image : "/user.png";

  return (
    <>
      {/* الصورة العادية */}
      <img
        src={imageSrc}
        onError={(e: any) => (e.target.src = "/user.png")}
        width={80}
        height={80}
        className="size-full rounded-full cursor-pointer"
        alt="profile-img"
        onClick={handleOpen}
      />

      {/* الأوفرلاي لما تتفتح الصورة */}
      {open && (
        <div
          className="fixed inset-0 bg-background/80 flex items-center justify-center z-50"
          onClick={handleClose}>
          <img
            src={imageSrc}
            onError={(e: any) => (e.target.src = "/user.png")}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            alt="zoomed-profile-img"
          />
        </div>
      )}
    </>
  );
};

export default Image;
