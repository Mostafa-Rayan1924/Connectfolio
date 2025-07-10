import { linksType } from "@/types/type";
import {
  CircleUser,
  Compass,
  House,
  MessageCircleCode,
  Settings,
  UserPlus,
  Video,
} from "lucide-react";

export let linksArr: linksType[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
    icon: House,
  },
  {
    id: 3,
    link: "/explore?page=1",
    title: "Explore",
    icon: Compass,
  },
  {
    id: 4,
    link: "/settings",
    title: "Settings",
    icon: Settings,
  },
  {
    id: 4,
    link: "/signup",
    title: "Signup",
    icon: UserPlus,
  },
  {
    id: 5,
    link: "#",
    title: "Messages",
    icon: MessageCircleCode,
  },
  {
    id: 6,
    link: "#",
    title: "Reels",
    icon: Video,
  },
];
