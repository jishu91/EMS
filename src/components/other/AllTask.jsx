import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        📊 Employee Task Summary
      </h2>

      {/* Header */}
      <div className="grid grid-cols-5 font-semibold text-sm text-gray-600 border-b pb-2 mb-3">
        <span>Name</span>
        <span>New</span>
        <span>Active</span>
        <span>Completed</span>
        <span>Failed</span>
      </div>

      {/* Employee Rows */}
      {userData?.employees?.length > 0 ? (
        userData.employees.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 text-sm py-3 border-b last:border-none items-center"
          >
            <span className="font-medium text-gray-800">{elem.firstName}</span>
            <span className="text-blue-500 font-semibold">
              {elem.taskCounts?.newTask || 0}
            </span>
            <span className="text-yellow-500 font-semibold">
              {elem.taskCounts?.active || 0}
            </span>
            <span className="text-green-600 font-semibold">
              {elem.taskCounts?.completed || 0}
            </span>
            <span className="text-red-500 font-semibold">
              {elem.taskCounts?.failed || 0}
            </span>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-sm mt-3">
          No employee data available yet.
        </p>
      )}
    </div>
  );
};

export default AllTask;
