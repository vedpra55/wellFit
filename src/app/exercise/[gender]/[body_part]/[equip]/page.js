import Navbar from "@/components/UI/Navbar";
import { getCurrentUser, getExerciseData } from "@/utils/apiCalls";
import React from "react";
import ExerciseContainer from "./exerciseContainer";

const MainExercisePage = async ({ params }) => {
  const { gender, body_part, equip } = params;

  const user = await getCurrentUser();

  const data = await getExerciseData(gender, body_part, equip);

  if (!user) {
    return null;
  }

  return (
    <div className="bg-black1 pb-20">
      <div className="cont px-4">
        <Navbar user={user} />
        <ExerciseContainer user={user} data={data} />
      </div>
    </div>
  );
};

export default MainExercisePage;
