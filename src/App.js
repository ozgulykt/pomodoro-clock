import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import Timer from './components/Timer';

const DEFAULT_BREAK_LENGTH = 5;
const DEFAULT_SESSION_LENGTH = 25;

class App extends Component {
  constructor() {
    super();
    this.state = {
      breakLength: DEFAULT_BREAK_LENGTH,
      sessionLength: DEFAULT_SESSION_LENGTH,
      timerMinute: DEFAULT_SESSION_LENGTH * 60,
      isPlay: 'Session'
    }
  }
  breakLengthIncrement = () => {
    console.log(this.state.breakLength);
    if (this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
  breakLengthDecrement = () => {
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }
  sessionLengthIncrement = () => {
    if (this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timerMinute: (this.state.sessionLength + 1) * 60
      })
    }
  }
  sessionLengthDecrement = () => {
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timerMinute: (this.state.sessionLength - 1) * 60
      })
    }
  }

  onPlay = () => {
    if (this.state.timerMinute > 0) {
      this.intervalID = setInterval(() => {
        this.setState({
          timerMinute: this.state.timerMinute - 1
        });
        if (this.state.timerMinute === 0 && this.state.isPlay === 'Session') {
          this.setState({
            timerMinute: this.state.breakLength * 60,
            isPlay: 'Break'
          });
          this.state.timerMinute <= 60 ? this.setColor('red') : this.setColor('white');
        }
        this.state.timerMinute <= 60 ? this.setColor('red') : this.setColor('white');
        if (this.state.timerMinute < 0) {
          this.setState({
            timerMinute: 0
          });
          clearInterval(this.intervalID);
        }
      }, 1000);
    }
  }

  setColor = (fColor) => {
    const timeFontColor = document.getElementById("time-left");
    timeFontColor.style.color = fColor;
    timeFontColor.style.borderColor = fColor;
  }

  onPause = () => {
    clearInterval(this.intervalID);
  }

  onRefresh = () => {
    this.setState({
      timerMinute: DEFAULT_SESSION_LENGTH * 60,
      breakLength: DEFAULT_BREAK_LENGTH,
      sessionLength: DEFAULT_SESSION_LENGTH
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="title">Pomodoro Clock</h1>
        <div className="row">
          <div className="col">
            <BreakLength
              breakLength={this.state.breakLength}
              breakLengthIncrement={this.breakLengthIncrement}
              breakLengthDecrement={this.breakLengthDecrement}
            />
          </div>
          <div className="col">
            <SessionLength
              sessionLength={this.state.sessionLength}
              sessionLengthIncrement={this.sessionLengthIncrement}
              sessionLengthDecrement={this.sessionLengthDecrement}
            />
          </div>
        </div>
        <div className="row">
          <Timer
            timerMinute={this.state.timerMinute}
            timerSecond={this.state.timerSecond}
            onClickPlay={this.onPlay}
            onClickPause={this.onPause}
            onClickRefresh={this.onRefresh}
            isPlay={this.state.isPlay}
          />
        </div>
      </div>
    );
  }
}

export default App;
