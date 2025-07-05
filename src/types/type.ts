import { LucideIcon } from "lucide-react";

export interface linksType {
  id: number;
  link: string;
  title: string;
  icon: LucideIcon;
}
export interface userType {
  username: string;
  name: string;
  email: string;
  id: number;
  profile_image: any;
  comments_count: number;
  posts_count: number;
}
export type PostType = {
  id: number;
  title: string | null;
  body: string;
  author: {
    id: number;
    profile_image: any;
    is_fake: boolean;
    username: string;
    name: string;
    email: string | null;
    email_verified_at: string | null;
    remember_token: string | null;
    created_at: string;
    updated_at: string;
  };
  image: string;
  tags: any[];
  created_at: string;
  comments_count: number;
};
