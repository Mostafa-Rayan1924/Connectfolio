"use client";
import { createContext, use, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let Authcontext = createContext(
  {} as { user: UserType; setUser: any; LogoutFunc: any }
);
export interface UserType {
  user: {
    name: string;
    username: string;
    email: string;
    id: number;
    password: string;
    profile_image: string;
    comments_count: number;
    posts_count: number;
  };
  token: string;
}

const AuthContextFunc = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = useState({} as UserType);
  let LogoutFunc = () => {
    setUser({} as UserType);
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setUser({
        user: JSON.parse(user).user,
        token: JSON.parse(user).token,
      });
    }
  }, []);
  return (
    <Authcontext.Provider value={{ user, setUser, LogoutFunc }}>
      {children}
    </Authcontext.Provider>
  );
};

export default AuthContextFunc;
