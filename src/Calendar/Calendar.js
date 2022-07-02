import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calendar = () => {
    return (
        <div className='w-96 m-auto mt-20 items-center justify-center'>
            <DayPicker />
        </div>
    );
};

export default Calendar;