import { useContext, useState } from "react";
import axios from "axios";
import { showCustomToast } from "../Reusable/Toast";
import toast from "react-hot-toast";
import { loginSchema } from "./Validations";
import z from "zod";
import { Authcontext } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
let useFormLogin = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(Authcontext);
  let onSubmit = async (values: z.infer<typeof loginSchema>) => {
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

  return { form, loading, onSubmit };
};
export default useFormLogin;
