import { getCurrentUser } from "@/utils/apiCalls";
import React from "react";
import HumanBody from "./humanBody";
import Navbar from "@/components/UI/Navbar";

const ExcercisePage = async () => {
  const user = await getCurrentUser();

  return (
    <div className="bg-black1 ">
      <div className="cont px-4 ">
        <Navbar user={user} />

        <HumanBody />
      </div>
    </div>
  );
};

export default ExcercisePage;
