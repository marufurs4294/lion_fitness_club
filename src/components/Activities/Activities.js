import React from 'react';
import './Activities.css';
import User from '../User/User';
import UserActivities from '../UserActivities/UserActivities';

const Activities = () => {
    return (
        <div className='Activity pt-3'>
            <User></User>
            <UserActivities></UserActivities>
        </div>
    );
};

export default Activities;