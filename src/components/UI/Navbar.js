"use client";

import { createClient } from "@/utils/supabase";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Navbar = ({ user }) => {
  const singOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();

    toast.success("Signout Successfully");

    window.location.reload();
  };

  const path = usePathname();

  return (
    <div className="flex pt-5 md:pt-10 flex-wrap justify-between">
      <Link href={"/"}>
        <p className="text-white text-[14px] md:text-lg font-medium">
          WellFit{" "}
        </p>
      </Link>
      {user && (
        <div className=" items-center flex gap-x-1 md:gap-x-5 text-white1 border-white1 rounded-2xl">
          <Link
            className={`${
              path.includes("/exercise")
                ? "bg-white text-black px-2 md:px-5 md:text-[16px] text-xs py-1 rounded-2xl"
                : "text-white1 px-2 md:px-5 text-[10px] md:text-[16px]"
            }`}
            href={"/exercise"}
          >
            Exercise
          </Link>
          <Link
            className={`${
              path === "/account"
                ? "bg-white text-xs text-black md:text-[16px]  px-2 md:px-5 py-1 rounded-2xl"
                : "text-white1 px-2 md:px-5 text-[10px] md:text-[16px]"
            }`}
            href={"/account"}
          >
            Account
          </Link>
          <Link
            className={`${
              path === "/wellbeing"
                ? "bg-white text-xs text-black md:text-[16px]  px-2 md:px-5 py-1 rounded-2xl"
                : "text-white1 px-2 md:px-5 text-[10px] md:text-[16px]"
            }`}
            href={"/wellbeing"}
          >
            Wellbeing
          </Link>
          <Link
            className={`${
              path === "/leaderboard"
                ? "bg-white text-[10px] text-black md:text-[16px]  px-2 md:px-5 py-1 rounded-2xl"
                : "text-white1 px-2 md:px-5 text-[10px] md:text-[16px]"
            }`}
            href={"/leaderboard"}
          >
            Leaderboard
          </Link>
        </div>
      )}
      <div className="pt-2">
        {user && (
          <button
            onClick={singOut}
            className="bg-black2  px-2 py-1 md:px-3 md:py-2 rounded-xl text-white1 text-xs"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
