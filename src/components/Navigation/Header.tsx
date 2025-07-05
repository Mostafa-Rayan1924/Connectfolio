import Image from "next/image";
import Logo from "../Reusable/Logo";
import SidebarPhone from "./SidebarPhone";
import SignupBtn from "./SignupBtn";

const Header = () => {
  return (
    <header className="lg:hidden  block border-b  border-border   ">
      <div className=" containers py-4 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-3">
          <SidebarPhone />
          {true ? (
            <SignupBtn />
          ) : (
            <Image
              src={"/logo.gif"}
              width={40}
              className="rounded-full"
              height={40}
              alt="profile-img"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
