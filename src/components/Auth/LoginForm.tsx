"use client";

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
import Link from "next/link";
import { useContext } from "react";
import { Authcontext } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import useFormLogin from "./useFormLogin";
export default function LoginForm() {
  const { user, setUser } = useContext(Authcontext);
  const router = useRouter();
  const { form, onSubmit, loading } = useFormLogin();
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
