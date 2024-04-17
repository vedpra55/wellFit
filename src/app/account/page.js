import Navbar from "@/components/UI/Navbar";
import { getCurrentUser } from "@/utils/apiCalls";
import React from "react";
import AccountActionContainer from "./accountActionContainer";
import Link from "next/link";

const AccountPage = async () => {
  const user = await getCurrentUser();

  return (
    <div className=" bg-black1 min-h-screen  px-4">
      <div className="cont">
        <Navbar user={user} />

        <div className="flex text-white flex-col mt-10 items-start md:flex-row justify-between">
          <h1 className="  text-white text-3xl font-medium ">Account Center</h1>
        </div>
        <div className="flex flex-col gap-y-4 px-4 md:px-10 py-4 md:py-10 rounded-xl text-white mt-10 gap-5 justify-between bg-black2 flex-wrap ">
          <div className="flex justify-between">
            <p>Name</p>
            <p>{user?.name}</p>
          </div>
          <div className="flex justify-between">
            <p>Email</p>
            <p>{user?.email}</p>
          </div>
          <div className="flex justify-between">
            <p>Points</p>
            <p>{user?.points}</p>
          </div>
          <div className="flex justify-between">
            <p>Leaderboard Rank</p>
            <p>{user?.rank}</p>
          </div>
          <div className="flex justify-between">
            <p>Height</p>
            <p>{user?.height} CM</p>
          </div>
          <div className="flex justify-between">
            <p>Weight</p>
            <p>{user?.weight} KG</p>
          </div>
          <div className="flex justify-between">
            <p>Age</p>
            <p>{user?.age} </p>
          </div>
          <div className="flex justify-between">
            <p>Fitness Goal</p>
            <p>{user?.fitnessgoal}</p>
          </div>
          <AccountActionContainer user={user} />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
