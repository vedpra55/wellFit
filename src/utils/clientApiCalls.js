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
