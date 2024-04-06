"use client";

import Modal from "@/components/UI/Modal/Modal";
import TextInput from "@/components/inputs/TextInput";
import { createClient } from "@/utils/supabase";

import React, { useState } from "react";
import toast from "react-hot-toast";

const AccountActionContainer = ({ user }) => {
  const [openInfoModal, setInfoModal] = useState(false);

  console.log(user);

  const [formData, setFormData] = useState({
    age: user?.age?.toString(),
    weight: user?.weight,
    height: user?.height,
    fitnessGoal: user?.fitnessGoal,
  });

  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prv) => ({
      ...prv,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const supabase = createClient();

    setLoading(true);

    const { error } = await supabase
      .from("users")
      .update({
        age: parseFloat(formData.age),
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height),
        fitnessgoal: formData.fitnessGoal,
      })
      .eq("uid", user.uid)
      .select();

    if (error) {
      toast.error("Something goes wrong");
    } else {
      toast.success("Info Added");
    }

    setLoading(false);

    setInfoModal(false);

    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => setInfoModal(true)} className="btn text-[14px]">
        Add Your Info
      </button>

      <Modal
        width={" w-80 md:w-1/3"}
        isOpen={openInfoModal}
        onClose={() => setInfoModal(false)}
      >
        <p className="mb-5 text-white text-xl">Add Your Info</p>
        <div className="flex flex-col gap-y-4">
          <TextInput
            value={formData.age}
            onChange={handleChange}
            label={"Age"}
            name={"age"}
          />
          <TextInput
            onChange={handleChange}
            label={"Weight (KG)"}
            name={"weight"}
            value={formData.weight}
          />
          <TextInput
            onChange={handleChange}
            label={"Height (CM)"}
            name={"height"}
            value={formData.height}
          />
          <TextInput
            onChange={handleChange}
            label={"Fitness Goal"}
            name={"fitnessGoal"}
            value={formData.fitnessGoal}
          />
          <button onClick={handleSubmit} className="btn text-[14px] w-full">
            {isLoading ? "Wait..." : "Submit"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AccountActionContainer;
