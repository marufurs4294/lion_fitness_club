import React from 'react';
import './BreakTime.css'
const BreakTime = () => {
    return (
        <div>
            <div className="text-start my-4 ps-3 ">
        <h5 className="fw-bold">Add A Break</h5>
      </div>
      <div className="d-flex align-items-center py-2 break-time">
        <div>
          
            <button className="fw-bold btn break-btn">10M</button>
          
        </div>
        <div>
          
            <button className="fw-bold btn break-btn">15M</button>
          
        </div>
        <div>
          
            <button className="fw-bold btn break-btn">20M</button>
          
        </div>
        <div>
          
            <button className="fw-bold btn break-btn">25M</button>
          
        </div>

        <div>
          
            <button className="fw-bold btn break-btn">30M</button>
          
        </div>
      </div>
        </div>
    );
};

export default BreakTime;