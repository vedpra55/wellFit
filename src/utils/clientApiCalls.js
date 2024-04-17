import { createClient } from "@/utils/supabase";

export const updateUserPoints = async (uid, points) => {
  const supbase = createClient();

  const { error, status } = await supbase
    .from("users")
    .update({ points: points })
    .eq("uid", uid)
    .select();

  return true;
};

export const addWellnessData = async (data) => {
  const supbase = createClient();

  const { error, status } = await supbase.from("wellness_data").insert(data);

  if (error) {
    throw error;
  }

  return true;
};
