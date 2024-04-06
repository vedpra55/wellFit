"use client";

import TextInput from "@/components/inputs/TextInput";
import { createClient } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prv) => ({
      ...prv,
      [name]: value,
    }));
  };

  const handleCreateAccount = async () => {
    const supabase = createClient();

    setLoading(true);

    const res = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    console.log(res);

    toast.success("Loged In Successfully");

    setLoading(false);

    setFormData({ email: "", password: "" });

    window.location.replace("/");
  };

  return (
    <div className="bg-black1 min-h-screen">
      <div className=" grid grid-cols-12 items-start">
        <img
          src="/images/hero.jpg"
          className="min-h-screen hidden md:block w-full col-span-6"
        />
        <div className="col-span-12 md:col-span-6 flex justify-center mt-40">
          <div className="bg-mainBg mx-4 md:mx-0 w-full md:w-2/3  rounded-2xl px-4 md:px-10 py-5">
            <p className="text-white font-semibold text-2xl">Log In</p>
            <div className="flex flex-col mt-8 gap-y-5">
              <TextInput
                onChange={handleChange}
                name={"email"}
                label={"Email"}
                req={true}
              />
              <TextInput
                onChange={handleChange}
                name={"password"}
                label={"Password"}
                req={true}
              />
              <button
                disabled={isLoading}
                onClick={handleCreateAccount}
                className="btn mb-5 w-full "
              >
                {isLoading ? "Wait..." : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
