import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-xl shadow border-l-4 border-red-500 p-5 opacity-95">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
          {data.category}
        </span>
        <span className="text-xs text-gray-500">{data.taskDate}</span>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{data.taskTitle}</h2>

      <p className="text-sm text-gray-600 mt-2">{data.taskDescription}</p>

      <div className="mt-6">
        <button className="w-full bg-red-500 text-white text-xs font-medium py-2 rounded-lg cursor-not-allowed">
          ✖ Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
