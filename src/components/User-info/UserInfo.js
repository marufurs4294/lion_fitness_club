import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="d-flex gap-5 user-info">
      <div>
        <div>
          <p>
            <span className="fw-bold fs-4">75</span>
            <span className="text-muted">Kg</span>
          </p>
          <h6>Weight</h6>
        </div>
      </div>
      <div>
        <div>
          <p>
            <span className="fw-bold fs-4">5.6</span>
          </p>
          <h6>Height</h6>
        </div>
      </div>
      <div>
        <div>
          <p>
            <span className="fw-bold fs-4">25</span>
            <span className="text-muted">Yrs</span>
          </p>
          <h6>Age</h6>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
