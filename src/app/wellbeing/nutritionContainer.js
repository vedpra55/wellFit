"use client";

import { useState } from "react";
import Markdown from "react-markdown";

export default function NutritionContainer() {
  const [text, setText] = useState("I have sleeping issue");
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  async function main() {
    setLoading(true);
    setData(null);

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `You are nutrition plan writer who give step by step information for the problem ${text}`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const texts = response.text();
    setData(texts);
    setLoading(false);
  }

  return (
    <div className="mt-10 pb-10 border-t pt-5">
      <p className=" text-2xl font-medium text-white">Nutrition</p>
      <div className="grid min-h-96 items-start grid-cols-12 gap-x-5 mt-5">
        <div className="col-span-12 h-full md:col-span-6 bg-black2 p-5 rounded-md">
          <div>
            <div className="flex justify-between mb-5">
              <p className="text-white text-xl">Write Your Problem</p>
              <button
                onClick={() => {
                  setData(null);
                  setText("");
                  setText("");
                }}
                className="text-white"
              >
                Clear
              </button>
            </div>
            <input
              placeholder="Back Problem"
              onChange={(e) => setText(e.target.value)}
              className="px-4 w-full text-white text-[15px] py-2 rounded-lg bg-black3"
            />
          </div>
          {data && (
            <div className="mt-4 text-white">
              <Markdown className="flex flex-col gap-y-4">{data}</Markdown>
            </div>
          )}
          <button className="btn w-full mt-5" onClick={main}>
            {isLoading ? "Wait.." : "Generate"}
          </button>
        </div>
        <img
          className="hidden md:block col-span-12 md:col-span-6 rounded-md"
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}
