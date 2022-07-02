import React, { useEffect, useState } from 'react';
import TasksData from './TasksData/TasksData';
import './Homepage.css'
const Homepage = () => {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://tim-eh-40042.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);
    return (
        <div>
            <h1 className='text-4xl mb-4 mt-10 text-center  font-bold text-slate-800'>Your Daily Tasks</h1>

            <div className='tasks justify-items-center'>
                {tasks.map(task => <TasksData key={task._id} task={task}></TasksData>)}
            </div>

        </div>
    );
};

export default Homepage;