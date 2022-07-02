import React from 'react';

const TasksData = ({ task }) => {
    return (
        <div className='m-auto text-center mt-6'>
            <input type="checkbox" id="html" name="fav_language" value="HTML" />
            <label for="html">{task.myTask}</label>
        </div>
    );
};

export default TasksData;