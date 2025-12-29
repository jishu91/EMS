import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] bg-white rounded-xl shadow border-l-4 border-blue-400 p-5">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
          {data.category}
        </span>
        <span className="text-xs text-gray-500">{data.taskDate}</span>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{data.taskTitle}</h2>

      <p className="text-sm text-gray-600 mt-2">{data.taskDescription}</p>

      <div className="mt-6">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-2 rounded-lg transition">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
