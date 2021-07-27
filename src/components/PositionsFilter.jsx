/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const positions = [
  "QB",
  "WR",
  "RB",
  "TE",
  "OT",
  "IOL",
  "IDL",
  "EDGE",
  "LB",
  "CB",
  "S",
];
export const PositionsFilter = ({ positionFilterChanged }) => {
  const [activePosition, setActivePosition] = useState("");

  useEffect(() => {
    positionFilterChanged(activePosition);
  }, [activePosition]);

  return (
    <nav className="flex flex-col sm:flex-row">
      {activePosition === "" ? (
        <button
          onClick={() => setActivePosition("")}
          className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
        >
          ALL
        </button>
      ) : (
        <button
          onClick={() => setActivePosition("")}
          className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
        >
          ALL
        </button>
      )}
      {positions.map((position) =>
        activePosition === position ? (
          <button
            key={position}
            onClick={() => setActivePosition(position)}
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500"
          >
            {position}
          </button>
        ) : (
          <button
            key={position}
            onClick={() => setActivePosition(position)}
            className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
          >
            {position}
          </button>
        )
      )}
    </nav>
  );
};
