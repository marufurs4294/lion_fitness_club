import React from "react";
import './UserActivities.css'
import BreakTime from "../BreakTime/BreakTime";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";

const UserActivities = ({time}) => {
  return (
    <div >
      <BreakTime></BreakTime>
      <ExerciseDetails time={time}></ExerciseDetails>
    </div>
  );
};

export default UserActivities;
