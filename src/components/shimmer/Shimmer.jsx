import React from "react";
import ShimmerCard from "./ShimmerCard";
const Shimmer = () => {
  return (
    <div className="flex justify-between flex-wrap gap-4 p-8 ">
      {Array(20)
        .fill("")
        .map((e) => (
          <div key={e}>
            <ShimmerCard key={e}  />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
