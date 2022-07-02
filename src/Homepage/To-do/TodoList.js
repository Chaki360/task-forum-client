import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const TodoList = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        const url = `https://tim-eh-40042.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(' Your task added successfully ')
                reset()
            })



    };
    return (
        <section>
            <h1 className='text-4xl mb-4 mt-20  text-center font-bold text-violet-800'>Write your task below</h1>
            <div className=' w-96 m-auto items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <textarea className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm' placeholder='Write your Task' type="text" {...register("myTask")} />

                    <input className=' bg-primary hover:bg-green-600 font-semibold text-white rounded-md w-full mt-3 block px-3 py-3' value='Add Your Task' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default TodoList;