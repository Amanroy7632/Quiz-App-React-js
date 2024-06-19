import React from "react";

const Progress = ({resultPercent,bgColor}) => {
  return (
    <div className="w-full flex bg-gray-200 rounded-xl overflow-hidden my-1">
      <div
        className={` h-4 ${bgColor}  items-center`}
        style={{ width: `${resultPercent}%` }}
      >
        <p className=" text-xs px-1 text-white">{bgColor.includes("red")?"Incorrect Answer: ":bgColor.includes("yellow")?"Unattempted: ":"Correct Answer: "}
            {resultPercent}%</p>
      </div>
    </div>
  );
};

export default Progress;
