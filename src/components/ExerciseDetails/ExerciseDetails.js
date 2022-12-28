import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    const {time} = props;
    // console.log(time)

    let totalTime = 0;
    let quantity = 0;
    for(const minutes of time){
        quantity = quantity + minutes.quantity;
        totalTime = totalTime + minutes.time * minutes.quantity
    }
    return (
        <div className='mt-4'>
            <div className='text-start ps-3'>
            <h5 className="fw-bold">Exercise Details</h5>
            </div>

            <div className='d-flex justify-content-between px-3 py-2 pt-3 align-items-center fw-bold mt-3 bg-sky '>
                <p>Exercise Time</p>
                <p className='text-muted'>{totalTime} Minutes</p>
            </div>
            <div className='d-flex justify-content-between px-3 py-2 pt-3 align-items-center fw-bold mt-3 bg-sky '>
                <p>Break Time</p>
                <p className='text-muted'> Minutes</p>
            </div>

            <div className='mt-2'>
                <button className='btn fw-bold px-5 complete-btn'>Activity Complete</button>
            </div>

        </div>
    );
};

export default ExerciseDetails;