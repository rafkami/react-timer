import React from "react";
import "../styles/Controls.css";

const Controls = ({
  status,
  clickStart,
  clickStop,
  clickResume,
  clickRestart,
  clickReset
}) => {
  return (
    <div>
      <div className="controls">
        {status !== "started" && status !== "stopped" ? (
          <button
            className="controls__button controls--start"
            onClick={clickStart}
          >
            START
          </button>
        ) : status === "started" ? (
          <button
            className="controls__button controls--stop"
            onClick={clickStop}
          >
            STOP
          </button>
        ) : (
          <button
            className="controls__button controls--resume"
            onClick={clickResume}
          >
            RESUME
          </button>
        )}
        <button
          className="controls__button controls--restart"
          onClick={clickRestart}
        >
          RESTART
        </button>
        <button
          className="controls__button controls--reset"
          onClick={clickReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Controls;
