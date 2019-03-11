import React from "react";
import "../styles/Display.css";

const Display = props => {
  const formatUnit = unitTime => {
    return unitTime < 10
      ? `0${unitTime}`.substring(0, 2)
      : unitTime.toString().substring(0, 2);
  };

  const getTime = timeInMilliseconds => {
    let time = timeInMilliseconds;
    const hours = formatUnit(Math.floor(time / (60 * 60 * 1000)));

    time = time % (60 * 60 * 1000);
    const minutes = formatUnit(Math.floor(time / (60 * 1000)));

    time = time % (60 * 1000);
    const seconds = formatUnit(Math.floor(time / 1000));

    const milliseconds = formatUnit(time % 1000);

    return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
  };

  return (
    <div className="display__container">
      <div className="display--inner">
        {props.status !== null ? (
          <div className="display--countdown">{getTime(props.countdown)}</div>
        ) : (
          <>
            <div className="display--unit">
              <input
                className="display--input"
                type="number"
                autoFocus
                name="hours"
                maxLength="2"
                placeholder="00"
                min="00"
                max="99"
                value={props.hours}
                onChange={props.inputChange}
              />
              <label htmlFor="hours">hours</label>
            </div>
            <div className="display--separate">:</div>
            <div className="display--unit">
              <input
                className="display--input"
                type="number"
                name="minutes"
                maxLength="2"
                placeholder="00"
                min="00"
                max="59"
                value={props.minutes}
                onChange={props.inputChange}
              />
              <label htmlFor="minutes">minutes</label>
            </div>
            <div className="display--separate">:</div>
            <div className="display--unit">
              <input
                className="display--input"
                type="number"
                name="seconds"
                maxLength="2"
                placeholder="00"
                min="00"
                max="59"
                value={props.seconds}
                onChange={props.inputChange}
              />
              <label htmlFor="seconds">seconds</label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Display;
