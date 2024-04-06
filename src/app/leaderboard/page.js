import Navbar from "@/components/UI/Navbar";
import { getCurrentUser, getLeaderBoard } from "@/utils/apiCalls";
import React from "react";
import LeaderboardTable from "./leaderboardTable";

const Leaderboard = async () => {
  const user = await getCurrentUser();

  const data = await getLeaderBoard();

  if (!user) return null;

  console.log(data);

  return (
    <div className="bg-black1">
      <div className="cont px-4  md:px-0">
        <Navbar user={user} />
        <LeaderboardTable uid={user.uid} data={data} />
      </div>
    </div>
  );
};

export default Leaderboard;
