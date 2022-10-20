import React from "react";

const SkeletonVideo = () => {
  return (
    <div className="animate-pulse my-10 hover:cursor-wait">
      <div className="h-5 w-52 bg-slate-800 mb-10 rounded"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-slate-800 h-36 lg:h-32 rounded-lg"></div>
        <div className="bg-slate-800 hidden md:block h-36 lg:h-32 rounded-lg"></div>
        <div className="bg-slate-800 hidden md:block h-36 lg:h-32 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonVideo;
