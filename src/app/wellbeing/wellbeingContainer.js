"use client";

import TextInput from "@/components/inputs/TextInput";
import { addWellnessData } from "@/utils/clientApiCalls";
import React, { useState } from "react";
import toast from "react-hot-toast";

const WellbeingContainer = ({ user }) => {
  const [calorieIntake, setCalorieIntake] = useState(0);
  const [waterIntake, setWaterIntake] = useState(0);
  const [sleepDuration, setSleepDuration] = useState(0);
  const [mood, setMood] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleCalorieIntake = (event) => {
    setCalorieIntake(event.target.value);
  };

  const handleWaterIntake = (event) => {
    setWaterIntake(event.target.value);
  };

  const handleSleepDuration = (event) => {
    setSleepDuration(event.target.value);
  };

  const handleMood = (event) => {
    setMood(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);

    const data = {
      calorie_intake: parseInt(calorieIntake),
      water_intake: parseInt(waterIntake),
      sleep_duration: parseInt(sleepDuration),
      mood: mood,
      user_id: user.uid,
    };

    try {
      await addWellnessData(data);
      toast.success("Action Completed Successfully");
    } catch (err) {}

    setLoading(false);
  };

  return (
    <div className="col-span-12 md:col-span-4">
      <div className="p-5 flex flex-col gap-y-4 rounded-2xl bg-black2">
        <p className="text-xl font-medium text-white mb-2">
          Enter Your Today Data
        </p>
        <TextInput
          label={"Calorie Intake: (kcals)"}
          value={calorieIntake}
          onChange={handleCalorieIntake}
          type={"number"}
        />

        <TextInput
          label={"Water Intake: (Liter)"}
          value={waterIntake}
          onChange={handleWaterIntake}
          type={"number"}
        />

        <TextInput
          label={"Sleep Duration:(Hour)"}
          value={sleepDuration}
          onChange={handleSleepDuration}
          type={"number"}
        />

        <div>
          <p className="mb-1 text-white text-[14px] font-medium">Mood:</p>
          <select
            className="px-4 w-full text-white text-[15px] py-2 rounded-lg bg-black3"
            id="mood"
            value={mood}
            onChange={handleMood}
          >
            <option value="">Select Mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="anxious">Anxious</option>
            <option value="calm">Calm</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="btn w-full mt-5">
          {isLoading ? "Wait..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default WellbeingContainer;
