import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Hero = ({ user }) => {
  return (
    <div className="cont px-4 pb-10">
      <Navbar user={user} />
      <div className="mt-10">
        {!user ? (
          <Link href={"/createAccount"}>
            <button className="bg-gradient-to-l border border-white1 rounded-2xl py-2 px-5 text-white to-[#000000] from-black2 from-0%">
              Get Started
            </button>
          </Link>
        ) : (
          <Link href={"/exercise"}>
            <button className="bg-gradient-to-l border border-white1 rounded-2xl py-2 px-5 text-white to-[#000000] from-black2 from-0%">
              Let's Excercise {user?.name}
            </button>
          </Link>
        )}
        <div className="grid mt-5   grid-cols-12 md:gap-x-20 items-start">
          <div className="col-span-12 gap-y-4 md:col-span-6 text-white">
            <h1 className="text-5xl md:text-[5rem] font-semibold">GET Fit,</h1>
            <h1 className="text-5xl md:text-[5rem] font-semibold">
              GET Strong,
            </h1>
            <h1 className="text-5xl md:text-[5rem] font-semibold">
              GET Healthy
            </h1>
            <p className="text-[14px] my-3 md:my-0 text-white1 md:w-96">
              Welcome to Wellfit, your ultimate health and fitness hub. Achieve
              your wellness goals effortlessly with personalized plans and
              intuitive tracking tools. Start your journey to a healthier you
              now!
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <img
              className="h-full w-96 md:w-full rounded-2xl"
              src="/images/hero.jpg"
            />
          </div>
        </div>
        <div className="flex gap-y-2 text-[14px] mt-14 md:mt-20 justify-between flex-wrap">
          <div className="bg-gradient-to-l flex  justify-center rounded-2xl py-2 px-3 md:px-2 md:w-56 text-white1 to-darkYellow from-black2 from-0%">
            Personalized Training
          </div>
          <div className="bg-gradient-to-l flex  justify-center rounded-2xl py-2 px-3  md:text-base md:px-2  md:w-56 text-white1 to-darkYellow from-black2 from-0%">
            Hand Picked Content
          </div>
          <div className="bg-gradient-to-l flex  justify-center  rounded-2xl py-2  px-3 md:px-2 md:w-56 text-white1 to-darkYellow from-black2 from-0%">
            Hand Picked Content
          </div>
          <div className="bg-gradient-to-l flex  justify-center rounded-2xl py-2 px-3 md:px-2  md:w-56 text-white1 to-darkYellow from-black2 from-0%">
            Hand Picked Content
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
