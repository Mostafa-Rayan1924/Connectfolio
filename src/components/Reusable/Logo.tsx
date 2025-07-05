import { Webhook } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-3">
        <Webhook />
        <h2 className="font-bold">Connectfolio</h2>
      </div>
    </Link>
  );
};

export default Logo;
