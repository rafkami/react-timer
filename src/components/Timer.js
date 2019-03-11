import React from "react";
import Display from "./Display";
import Controls from "./Controls";
import "../styles/Timer.css";

const Timer = props => {
  return (
    <div className="timer__container">
      <div className="timer--commands">
        Provide the time values and run timer
      </div>
      <Display
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
        countdown={props.countdown}
        status={props.status}
        inputChange={props.inputChange}
        focusChange={props.focusChange}
      />
      <Controls
        status={props.status}
        clickStart={props.clickStart}
        clickStop={props.clickStop}
        clickResume={props.clickResume}
        clickRestart={props.clickRestart}
        clickReset={props.clickReset}
      />
    </div>
  );
};

export default Timer;
