import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        📝 Your Tasks
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {data?.tasks?.length > 0 ? (
          data.tasks.map((elem, idx) => {
            if (elem.active) {
              return <AcceptTask key={idx} data={elem} />;
            }
            if (elem.newTask) {
              return <NewTask key={idx} data={elem} />;
            }
            if (elem.completed) {
              return <CompleteTask key={idx} data={elem} />;
            }
            if (elem.failed) {
              return <FailedTask key={idx} data={elem} />;
            }
            return null;
          })
        ) : (
          <p className="text-gray-400">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
