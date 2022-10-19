import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse hover:cursor-wait">
      <div className="h-5 w-52 bg-slate-700 mb-6 rounded"></div>
      <div className="grid grid-cols-3 lg:grid-cols-8 gap-5">
        <div className="bg-slate-700 h-36 lg:h-52 rounded-lg"></div>
        <div className="bg-slate-700 h-36 lg:h-52 rounded-lg"></div>
        <div className="bg-slate-700 h-36 lg:h-52 rounded-lg"></div>
        <div className="bg-slate-700 hidden md:block h-36 lg:h-52 rounded-lg"></div>
        <div className="bg-slate-700 hidden md:block h-36 lg:h-52 rounded-lg"></div>
        <div className="bg-slate-700 hidden md:block h-36 lg:h-52 rounded-lg"></div>
        <div className="bg-slate-700 hidden md:block h-36 lg:h-52 rounded-lg"></div>
        <div className="bg-slate-700 hidden md:block h-36 lg:h-52 rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
