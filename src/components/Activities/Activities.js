import React from 'react';
import './Activities.css';
import User from '../User/User';
import UserActivities from '../UserActivities/UserActivities';

const Activities = ({time}) => {
    // console.log(time)
    return (
        <div className='Activity pt-3'>
            <User></User>
            <UserActivities time={time}></UserActivities>
        </div>
    );
};

export default Activities;