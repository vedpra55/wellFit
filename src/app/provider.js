"use client";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }) => {
  return (
    <>
      <Toaster />
      <NextTopLoader />
      {children}
    </>
  );
};

export default Provider;
