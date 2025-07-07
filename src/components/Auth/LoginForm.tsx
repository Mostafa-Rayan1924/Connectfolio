"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { LoaderCircle, User2Icon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "./Validations";
import Link from "next/link";
import { use, useContext, useState } from "react";
import axios from "axios";
import { showCustomToast } from "../Reusable/Toast";
import toast from "react-hot-toast";
import { Authcontext } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(Authcontext);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    const params = {
      username: values.username,
      password: values.password,
    };
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
        params
      );
      if (res.status === 200) {
        setLoading(false);
        setUser({
          token: res.data.token,
          user: res.data.user,
        });
        localStorage.setItem("user", JSON.stringify(res.data));
        router.replace("/");
        showCustomToast(
          "User Logged In Successfully",
          res?.data?.user?.username,
          res?.data?.user?.profile_image
        );
        form.reset();
      }
    } catch (e: any) {
      setLoading(false);
      toast.error(e?.response?.data?.message);
    }
  };
  if (user?.user) {
    router.push("/");
  }
  return (
    <section className="w-[95%] md:w-[50%] mx-auto pt-20   ">
      <h2 className="flex items-center gap-3 text-3xl font-semibold mb-5 capitalize justify-center">
        <User2Icon className="size-10 text-primary" /> Welcome Back
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-2 border-dotted p-6  rounded-lg">
          <div className="flex flex-col lg:flex-row items-start gap-6   ">
            <div className="w-full  space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-1/2 mt-8  mx-auto">
            <Button disabled={loading} className="w-full" type="submit">
              {loading ? (
                <LoaderCircle size={20} className="text-white animate-spin " />
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </form>
        <Link href="/signup">
          <p className="text-center mt-5 text-sm">
            Don't have an account?
            <span className="text-primary cursor-pointer"> Sign up</span>
          </p>
        </Link>
      </Form>
    </section>
  );
}
