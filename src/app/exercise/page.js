import Navbar from "@/components/UI/Navbar";
import { getCurrentUser } from "@/utils/apiCalls";
import React from "react";

import HumanBody from "./humanBody";

const ExercisePage = async ({  }) => {

  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="bg-black1 pb-20">
      <div className="cont px-4">
        <Navbar user={user} />
        <HumanBody />
      </div>
    </div>
  );
};

export default ExercisePage;
