import React from "react";

const LeaderboardTable = ({ data, uid }) => {
  return (
    <div className="w-full mx-auto mt-10">
      <h1 className="text-3xl font-semibold text-white mb-5">Leaderboard</h1>
      <table className="w-full table-auto text-left bg-black2 text-white rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-black3">
            <th className="px-4 py-3 text-left font-bold">Rank</th>
            <th className="px-4 py-3 text-left font-bold">Name</th>
            <th className="px-4 py-3 text-left font-bold">Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-black3 text-white font-medium transition duration-300"
            >
              <td className="px-4 py-3">{index + 1}</td>
              {item.uid === uid ? (
                <td className="px-4 py-3">You</td>
              ) : (
                <td className="px-4 py-3 w-32 truncate">{item.name}</td>
              )}
              <td className="px-4 py-3">{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
