import React, { Component } from "react";
import "../styles/App.css";
import Timer from "./Timer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

library.add(faStopwatch);

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header--title">
          <FontAwesomeIcon icon="stopwatch" className="header--icon" />
          Our time is running out...
        </div>
      </div>
    </header>
  );
};

class App extends Component {
  state = {
    canRun: false,
    hours: "00",
    minutes: "00",
    seconds: "00",
    countdown: 0,
    status: null,
    errors: {
      empty: false,
      minutes: false,
      seconds: false
    },
    message: ""
  };

  messages = {
    empty_incorrect: "Put a number in at least one of the above fields",
    minutes_incorrect: "Maximum number of minutes cannot exceed 59",
    seconds_incorrect: "Maximum number of seconds cannot exceed 59"
  };

  handleStart = () => {
    const totalMs =
      (this.state.hours * 60 * 60 +
        this.state.minutes * 60 +
        this.state.seconds * 1) *
      1000;
    const validation = this.formValidation();
    if (
      this.state.status !== "started" &&
      (this.state.hours > 0 ||
        this.state.minutes > 0 ||
        this.state.seconds > 0) &&
      validation.correct
    ) {
      this.setState({
        status: "started",
        canRun: true,
        countdown: totalMs,
        errors: {
          empty: false,
          minutes: false,
          seconds: false
        }
      });

      this.interval = setInterval(() => {
        this.setState(prevState => ({
          countdown: prevState.countdown - 10
        }));

        if (this.state.countdown === 0) {
          clearInterval(this.interval);
          this.setState(() => ({ status: null }));
        }
      }, 10);
    } else {
      this.setState({
        errors: {
          empty: !validation.empty,
          minutes: !validation.minutes,
          seconds: !validation.seconds
        }
      });
    }
  };

  formValidation = () => {
    let empty = false;
    let minutes = false;
    let seconds = false;
    let correct = false;
    if (
      this.state.hours > 0 ||
      this.state.minutes > 0 ||
      this.state.seconds > 0
    ) {
      empty = true;
    }
    if (this.state.minutes < 60) {
      minutes = true;
    }
    if (this.state.seconds < 60) {
      seconds = true;
    }
    if (empty && minutes && seconds) {
      correct = true;
    }
    return {
      correct,
      empty,
      minutes,
      seconds
    };
  };

  handleStop = () => {
    clearInterval(this.interval);
    this.setState({
      status: "stopped"
    });
  };

  handleResume = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        status: "started",
        countdown: prevState.countdown - 10
      }));

      if (this.state.countdown === 0) {
        clearInterval(this.interval);
        this.setState(() => ({ status: null }));
      }
    }, 10);
  };

  handleRestart = () => {
    clearInterval(this.interval);
    this.setState({
      status: null,
      countdown: null
    });
  };

  handleReset = () => {
    clearInterval(this.interval);
    this.setState({
      canRun: false,
      hours: "00",
      minutes: "00",
      seconds: "00",
      countdown: null,
      status: null
    });
  };

  formatTime = time =>
    time < 10
      ? "0" + time.toString().slice(time.toString().length - 1)
      : time.toString().slice(time.toString().length - 2);

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: this.formatTime(value)
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Timer
          canRun={this.state.canRun}
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          countdown={this.state.countdown}
          status={this.state.status}
          clickStart={this.handleStart}
          clickStop={this.handleStop}
          clickResume={this.handleResume}
          clickRestart={this.handleRestart}
          clickReset={this.handleReset}
          inputChange={this.handleInputChange}
          focusChange={this.handleFocusChange}
          errors={this.state.errors}
          message={this.message}
        />
        {this.state.errors.empty && (
          <h4 className="timer__message"> {this.messages.empty_incorrect} </h4>
        )}
        {this.state.errors.minutes && (
          <h4 className="timer__message">
            {" "}
            {this.messages.minutes_incorrect}{" "}
          </h4>
        )}
        {this.state.errors.seconds && (
          <h4 className="timer__message">
            {" "}
            {this.messages.seconds_incorrect}{" "}
          </h4>
        )}
      </div>
    );
  }
}

export default App;
