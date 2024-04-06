import React from "react";
import MainView from "./mainView";

const ExerciseContainer = ({ data, user }) => {
  return (
    <div className="mt-5 md:mt-10">
      <div className="grid grid-cols-12 gap-x-5 items-start">
        <div className="col-span-12 flex flex-col gap-y-5">
          {data?.map((item, i) => (
            <MainView user={user} item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseContainer;
