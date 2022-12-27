import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Fitness.css'
import Activities from '../Activities/Activities';

const Fitness = () => {
    const [fitness, setFitness] = useState([]);

    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('fitness.json')
        .then(res => res.json())
        .then(data => setFitness(data))
    },[]);

    const handleAddToList = (fit) =>{
        console.log(fit);

        const newTime = [...time, fit]
        setTime(newTime)
      }
    return (
        <div>
            <div className='fitness m-5'>
            <div className="row flex-sm-column-reverse flex-lg-row">
            <div className="col-sm-12 col-md-9 col-lg-9 card-section">
            <div className='text-start'>
                <h2 className='fw-bold club-name'> <i className="fa-brands fa-wolf-pack-battalion fs-1"></i> LION FITNESS CLUB</h2>
                <h4 className='mt-4'>Select today's activities</h4>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                
            {
                    fitness.map(fit => <Card key={fit.id} fit={fit} handleAddToList={handleAddToList}></Card>)
                }
                </div>
                
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
                <Activities time={time}></Activities>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Fitness;