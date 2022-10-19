import React from "react";

const SkeletonBanner = () => {
  return (
    <div className="bg-slate-700 animate-pulse p-10 flex items-center rounded-xl cursor-wait md:h-[400px]">
      <div className="w-full">
        <div className="h-5 w-52 bg-slate-600 mb-3 rounded"></div>
        <div className="h-5 w-52 bg-slate-600 mb-7 rounded"></div>
        <div className="space-y-3 w-6/12">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-3.5 bg-slate-600 rounded col-span-2"></div>
            <div className="h-3.5 bg-slate-600 rounded col-span-1"></div>
          </div>
          <div className="h-3.5 bg-slate-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBanner;
