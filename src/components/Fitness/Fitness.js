import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Fitness.css'
import Activities from '../Activities/Activities';
import { addToDb, getStoredTime  } from '../../utilities/fakedb';


const Fitness = () => {
    const [fitness, setFitness] = useState([]);

    const [time, setTime] = useState([]);
    useEffect(() => {
        fetch('fitness.json')
        .then(res => res.json())
        .then(data => setFitness(data))
    },[]);

    useEffect( () => {
        const storedTime = getStoredTime ();
        const saveTime = []
        for(const id in storedTime){
            const addedTime = fitness.find(gym => gym.id === id);
            if(addedTime){
                const quantity = storedTime[id]
                addedTime.quantity = quantity;
                saveTime.push(addedTime)
            }
        }
        setTime(saveTime)
    },[fitness])

    const handleAddToList = (selectedTime) =>{
        let newTime = []
        const exists = time.find(gym => gym.id === selectedTime.id)
        if(!exists){
            selectedTime.quantity = 1;
            newTime = [...time,selectedTime ]
        }
        else{
            const rest = time.filter(gym => gym.id !== selectedTime.id)
            exists.quantity = exists.quantity + 1;
            newTime = [...rest, exists]
        }
        setTime(newTime)
        addToDb(selectedTime.id)
      }
    return (
        <div>
            <div className='fitness m-5'>
            <div className="row flex-column-reverse flex-lg-row">
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
            <div className="col-sm-12 col-md-3 col-lg-3 mb-5">
                <Activities time={time}></Activities>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Fitness;