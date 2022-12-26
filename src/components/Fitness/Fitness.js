import React, { useEffect, useState } from 'react';

const Fitness = () => {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        fetch('fitness.json')
        .then(res => res.json())
        .then(data => setFitness(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Fitness;