
import { getCurrentUser } from "@/utils/apiCalls";
import React from "react";
import Hero from "@/components/UI/Hero";

const HomePage = async () => {
  const user = await getCurrentUser();

  return (
    <div className="bg">
      <Hero  user={user}/>
    </div>
  );
};

export default HomePage;
