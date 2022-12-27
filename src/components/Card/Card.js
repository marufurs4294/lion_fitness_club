import React from 'react';
import './Card.css'

const Card = (props) => {
    const {img, title, description, age, time} = props.fit;
    return (
        <div className="col mx-0 my-4">
        <div className="card h-100 px-4 pt-4 pb-2">
          <img
            src={img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-start pt-3 pb-0">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-muted">{description.slice(163, )}</p>
            <p>For Age: <span className='fw-bold'>{age}</span> </p>
            <p>Time Required: <span className='fw-bold'>{time} Minutes</span></p>
            <div className='text-center pb-1'>
            <button className='btn fw-bold add-btn'>Add to list</button>
            </div>
          </div>
        </div>
      </div>
    
    );
};

export default Card;