import z from "zod";
import { formSchema } from "./Validations";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { showCustomToast } from "../Reusable/Toast";
import toast from "react-hot-toast";
import { Authcontext } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

let useFormSignup = () => {
  const { user, setUser } = useContext(Authcontext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "most",
      name: "sasa",
      email: "mrTbU@example.com",
      password: "23456789",
      image: undefined,
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
        formData
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
          "User Created Successfully",
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
  return { form, onSubmit, loading, selectedImage, setSelectedImage };
};
export default useFormSignup;
