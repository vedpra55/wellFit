"use client";

import React, { useEffect, useState } from "react";
import Toggle from "react-toggle";

import { BackBody, FrontBody } from "./MaleBody";
import { FemaleBodyBack, FemaleBodyFront } from "./FemaleBody";
import { useRouter } from "next/navigation";

const HumanBody = () => {
  const [selectedBodyPartFront, setSelectedBodyPartFront] = useState("");
  const [selectedBodyParBack, setSelectedBodyParBack] = useState("");

  const [mainPart, setMainPart] = useState("");

  const router = useRouter();

  const [gender, setGender] = useState("male");

  const [selectedEquip, setSelectedEquip] = useState("featured");

  useEffect(() => {
    if (selectedBodyParBack) {
      setMainPart(selectedBodyParBack);
    } else if (selectedBodyPartFront) {
      setMainPart(selectedBodyPartFront);
    }
  }, [selectedBodyPartFront, selectedBodyParBack]);

  useEffect(() => {
    if (mainPart && gender && selectedEquip) {
      router.push(`/exercise/${gender}/${mainPart}/${selectedEquip}`);
    }
  }, [mainPart]);

  return (
    <div className="grid pb-10 grid-cols-12 mt-10 gap-x-5 ">
      <div className="col-span-12  md:col-span-8 bg-black2 p-5  rounded-2xl grid gap-x-5 items-center grid-cols-12 ">
        <div className="col-span-12">
          <h1 className="text-white mb-5  text-2xl font-semibold">
            Select Body Part You Want to Exercise
          </h1>
        </div>

        <div
          className={`grid grid-cols-12 gap-x-5 col-span-12 ${
            gender === "male" ? "block" : "hidden"
          } `}
        >
          <FrontBody
            gender={gender}
            selectedBodyPart={selectedBodyPartFront}
            setSelectedBodyPart={setSelectedBodyPartFront}
          />
          <BackBody
            gender={gender}
            selectedBodyPart={selectedBodyParBack}
            setSelectedBodyPart={setSelectedBodyParBack}
          />
        </div>
        <div
          className={`grid grid-cols-12 gap-x-5 col-span-12 ${
            gender === "female" ? "block" : "hidden"
          } `}
        >
          <FemaleBodyFront
            gender={gender}
            selectedBodyPart={selectedBodyPartFront}
            setSelectedBodyPart={setSelectedBodyPartFront}
          />
          <FemaleBodyBack
            gender={gender}
            selectedBodyPart={selectedBodyParBack}
            setSelectedBodyPart={setSelectedBodyParBack}
          />
        </div>
      </div>
      <div className="col-span-12 mt-2 md:mt-0 md:col-span-4 p-5 bg-black2  rounded-2xl">
        <div className="flex gap-x-3">
          <p className="text-white">Male</p>
          <Toggle
            defaultChecked={gender == "male" ? false : true}
            icons={false}
            onChange={() => {
              setGender((prevGender) =>
                prevGender === "male" ? "female" : "male"
              );
              setSelectedBodyParBack("");
              setSelectedBodyPartFront("");
            }}
          />
          <p className="text-white">Female</p>
        </div>
        <div className="border-t mt-5 ">
          <p className="text-white mt-5 font-meium">Equipments</p>
          <div className="flex mt-5 5 flex-wrap gap-x-5">
            <div className="flex items-center gap-x-3">
              <input
                onChange={() => setSelectedEquip("featured")}
                className="w-4 h-4"
                type="checkbox"
                checked={selectedEquip === "featured"}
              />
              <p className="text-white text-[14px]">Featured</p>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                onChange={() => setSelectedEquip("barbell")}
                className="w-4 h-4"
                type="checkbox"
                checked={selectedEquip === "barbell"}
              />
              <p className="text-white text-[14px]">Barbell</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanBody;
