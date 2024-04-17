import { getWellbeingData } from "@/utils/apiCalls";
import React from "react";

const WellbeingTable = async ({ user }) => {
  const data = await getWellbeingData(user.uid);

  const getMoodColor = (mood) => {
    switch (mood) {
      case "happy":
        return "text-green-500";
      case "sad":
        return "text-red-500";
      default:
        return "text-blue-500";
    }
  };

  return (
    <div className="col-span-12 md:col-span-8">
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full divide-y divide-gray-700 bg-black2 text-white">
          <thead className="bg-black3 text-[10px] md:text-base">
            <tr>
              <th
                scope="col"
                className="px-3 py-1 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-3 py-1 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Calorie Intake (kcals)
              </th>
              <th
                scope="col"
                className="px-3 py-1 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Water Intake (Liter)
              </th>
              <th
                scope="col"
                className="px-3 py-1 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Sleep Duration (Hour)
              </th>
              <th
                scope="col"
                className="px-3 py-1 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
              >
                Mood
              </th>
            </tr>
          </thead>
          <tbody className="divide-y rounded-xl divide-gray-700">
            {data.map((item, index) => (
              <tr className="text-[14px] md:text-base " key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.created_at).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.calorie_intake}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.water_intake}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.sleep_duration}
                </td>
                <td
                  className={`${getMoodColor(
                    item.mood
                  )} px-6 py-4 whitespace-nowrap"`}
                >
                  {item.mood}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WellbeingTable;
