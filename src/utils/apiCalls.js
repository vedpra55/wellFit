import { createClient } from "@/utils/supabase-server";

import { cache } from "react";

export const getCurrentUser = cache(async () => {
  const supbase = createClient();

  const checkUser = await supbase.auth.getUser();

  const uid = checkUser.data?.user?.id;

  if (uid) {
    const user = await supbase
      .from("users")
      .select("*")
      .eq("uid", uid)
      .single();

    return user.data;
  } else {
    return null;
  }
});

export const getExerciseData = cache(async (gender, body_part, equip) => {
  const supbase = createClient();

  const data = await supbase
    .from("exercise")
    .select("*")
    .eq("gender", gender)
    .eq("body_part", body_part)
    .eq("equipment", equip);

  return data.data;
});

export const getLeaderBoard = cache(async () => {
  const supbase = createClient();

  const data = await supbase
    .from("users")
    .select("*")
    .order("points", { ascending: false });

  return data.data;
});

export const getWellbeingData = cache(async (uid) => {
  const supbase = createClient();

  const data = await supbase
    .from("wellness_data")
    .select("*")
    .eq("user_id", uid)
    .order("created_at", { ascending: false });

  return data.data;
});
