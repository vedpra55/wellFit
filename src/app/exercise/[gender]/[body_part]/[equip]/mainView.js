"use client";

import React, { useState } from "react";
import Timer from "./Timer";

const MainView = ({ item, user }) => {
  const [start, setStart] = useState(false);

  return (
    <div className="bg-black2 relative  rounded-2xl">
      <div className="bg-white1 flex items-center justify-between text-[15px] md:text-xl font-semibold text-black px-5 py-3 rounded-2xl">
        <p>{item.name}</p>
        {start ? (
          <Timer user={user} />
        ) : (
          <button onClick={() => setStart(true)} className=" btn text-xs">
            Start Excersice
          </button>
        )}
      </div>
      <div className="grid grid-cols-12 px-4 gap-x-4  items-center">
        {item.images.map((img, iii) => (
          <video
            key={iii}
            className="col-span-12 md:col-span-6 h-full mt-5"
            controls
          >
            <source src={img} />
          </video>
        ))}
      </div>
      <div className="px-5 mt-5 py-5 flex flex-col gap-y-5 text-text1">
        {item.descriptions.map((des, ii) => (
          <div className="text-white flex  items-start gap-x-3" key={des}>
            <span className="bg-black3 px-3 py-2  text-[14px] text-center  rounded-full">
              {ii + 1}
            </span>{" "}
            <p className=" flex-1">{des}</p>
          </div>
        ))}
      </div>
      <div className=" px-5 text-white1 opacity-95 text-[15px] py-1 top-20 left-5 rounded-lg  absolute bg-black1">
        {item.difficulty}
      </div>
    </div>
  );
};

export default MainView;
