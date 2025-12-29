import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {/* New Tasks */}
      <div className="bg-blue-500 text-white rounded-xl p-6 shadow">
        <h2 className="text-3xl font-bold">{data?.taskCounts?.newTask}</h2>
        <p className="text-sm mt-1">New Tasks</p>
      </div>

      {/* Completed */}
      <div className="bg-green-500 text-white rounded-xl p-6 shadow">
        <h2 className="text-3xl font-bold">{data?.taskCounts?.completed}</h2>
        <p className="text-sm mt-1">Completed</p>
      </div>

      {/* Active */}
      <div className="bg-yellow-400 text-black rounded-xl p-6 shadow">
        <h2 className="text-3xl font-bold">{data?.taskCounts?.active}</h2>
        <p className="text-sm mt-1">Active</p>
      </div>

      {/* Failed */}
      <div className="bg-red-500 text-white rounded-xl p-6 shadow">
        <h2 className="text-3xl font-bold">{data?.taskCounts?.failed}</h2>
        <p className="text-sm mt-1">Failed</p>
      </div>
    </div>
  );
};

export default TaskListNumbers;
