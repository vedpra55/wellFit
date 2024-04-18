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

        <div className="mt-32 text-white">
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-span-12 md:col-span-6">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className=" col-span-12  md:col-span-6">
              <p className="text-2xl font-semibold pt-3 md:pt-0">
                Personalised Training
              </p>
              <p className="mt-5">
                Here you will find that personalised training meets your goals.
                Our tailored workouts, expert guidance, and unwavering support
                ensure your success. Start your journey today!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-white">
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-span-12 md:col-span-6">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-2xl font-semibold pt-3 md:pt-0">Motivation</p>
              <p className="mt-5">
                Ready to take your fitness to new heights? Climb the leaderboard
                by completing our dynamic workouts. Join a community of
                motivated individuals, challenge yourself, and see your progress
                soar. Use the app and start climbing today!
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-white">
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-span-12 md:col-span-6">
              <img
                className="w-full rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1669315453542-68167fe4a83b?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-2xl font-semibold pt-3 md:pt-0">Wellbeing</p>
              <p className="mt-5">
                Elevate your well-being with our personalised training platform.
                Track activity, mood, nutrition, and sleep, while accessing
                meditation links and answers for holistic health. Start now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
