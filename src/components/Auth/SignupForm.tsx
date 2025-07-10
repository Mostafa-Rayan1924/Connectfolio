"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Upload, User2Icon, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { formSchema } from "./Validations";
import Link from "next/link";
import { Authcontext } from "@/lib/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { showCustomToast } from "../Reusable/Toast";
import { useRouter } from "next/navigation";
import useFormSignup from "./useFormSignup";
export default function SignupForm() {
  const { user, setUser } = useContext(Authcontext);
  const router = useRouter();
  if (user?.user) {
    router.push("/");
  }
  let { form, onSubmit, loading, setSelectedImage, selectedImage } =
    useFormSignup();

  return (
    <section className="w-[95%] lg:w-[70%] mx-auto py-5 md:py-10  ">
      <h2 className="flex items-center gap-3 text-3xl font-semibold mb-5 capitalize justify-center">
        <User2Icon className="size-10 text-primary" /> Signup
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-2 border-dotted p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row items-start gap-6   ">
            <div className="w-full lg:w-1/2 space-y-6">
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name in site" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
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
            {/* upload image */}
            <div className="w-full lg:w-1/2 space-y-6">
              {selectedImage ? (
                // the  image after choose ite
                <div className="w-full sm:w-[50%] lg:w-[80%] mx-auto p-2 border-dashed border-2 h-[200px] relative">
                  <div
                    onClick={() => {
                      setSelectedImage(null);
                      form.setValue("image", null);
                    }}
                    className="absolute top-3  right-3 cursor-pointer bg-red-500 size-10 grid place-items-center rounded-full">
                    <X size={22} className="text-white" />
                  </div>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="w-full h-full  object-fill shadow"
                  />
                </div>
              ) : (
                // the image box before choose
                <div className="w-full sm:w-[50%] lg:w-[80%] mx-auto grid place-items-center border-dashed border-2 h-[200px]">
                  <h2 className="capitalize text-primary text-xl">
                    Upload your image
                  </h2>
                </div>
              )}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="w-full sm:w-[50%] lg:w-[80%] mx-auto">
                        <input
                          type="file"
                          className="hidden"
                          id="fileInput"
                          accept="image/*"
                          name={field.name}
                          onChange={(e) => {
                            field.onChange(e.target.files);
                            setSelectedImage(e.target.files?.[0] || null);
                          }}
                        />
                        <label
                          htmlFor="fileInput"
                          className="bg-accent hover:bg-accent/80 hover:scale-105 duration-300 w-full py-2     rounded-lg cursor-pointer inline-flex items-center justify-center">
                          <Upload size={25} />
                        </label>
                      </div>
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
                "Signup"
              )}
            </Button>
          </div>
        </form>
        <Link href="/login">
          <p className="text-center mt-5 text-sm">
            Already have an account?{" "}
            <span className="text-primary cursor-pointer">Login</span>
          </p>
        </Link>
      </Form>
    </section>
  );
}
