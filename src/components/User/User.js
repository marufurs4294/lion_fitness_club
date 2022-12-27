import React from 'react';
import './User.css'

const User = () => {
    return (
        <div>
            <div className="user d-flex align-items-center">
                <div>
                    <img className='img-fluid' src="https://i.ibb.co/PWRB8zQ/profile-pic-sharp.png" alt="" />
                </div>
                <div className='ps-3'>
                    <h6>Marufur Rahman Siyam</h6>
                    <p className='text-muted'> <i className="fa-sharp fa-solid fa-location-dot"></i> Rajshahi, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default User;