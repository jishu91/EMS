import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header changeUser={props.changeUser} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <CreateTask />
        <div className="lg:col-span-2">
          <AllTask />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
