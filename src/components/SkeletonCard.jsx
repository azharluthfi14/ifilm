import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse hover:cursor-progress">
      <div className="h-5 w-52 bg-slate-800 mb-6 rounded"></div>
      <div className="grid grid-cols-3 lg:grid-cols-8 gap-3">
        <div className="bg-slate-800  aspect-[3/5] rounded-lg"></div>
        <div className="bg-slate-800  aspect-[3/5] rounded-lg"></div>
        <div className="bg-slate-800  aspect-[3/5] rounded-lg"></div>
        <div className="bg-slate-800 hidden md:block  aspect-[3/5] rounded-lg"></div>
        <div className="bg-slate-800 hidden md:block  aspect-[3/5] rounded-lg"></div>
        <div className="bg-slate-800 hidden md:block  aspect-[3/5] rounded-lg"></div>
        <div className="bg-slate-800 hidden md:block  aspect-[3/5] rounded-lg"></div>
        <div className="bg-slate-800 hidden md:block  aspect-[3/5] rounded-lg"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
