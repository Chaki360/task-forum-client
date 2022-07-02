import React from 'react';

const TasksData = ({ task }) => {
    return (

        <div className="card w-72 bg-base-100 shadow-xl">

            <div className="card-body text-center items-center">
                <input type="checkbox" id="task" />
                <label for="task">{task.myTask}</label>
                <div className="card-actions mt-3 justify-end">
                    <div className="badge badge-outline btn btn-xs">Edit Task</div>
                    <div className="badge badge-outline btn  btn-xs bg-error text-white">Delete Task</div>
                </div>
            </div>
        </div>


    );
};

export default TasksData;