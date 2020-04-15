import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = (props) => {
    return (
        <div>
            <div id="time-left" className="row">
                <h4 id="timer-label">{props.isPlay}</h4>
                <div>
                    <h2 className="timer">{(Math.floor(props.timerMinute / 60) < 10
                        ? ("0" + Math.floor(props.timerMinute / 60))
                        : Math.floor(props.timerMinute / 60)) + ":" +
                        (Math.floor(props.timerMinute % 60) < 10
                            ? ("0" + Math.floor(props.timerMinute % 60))
                            : Math.floor(props.timerMinute % 60))}</h2>
                </div>
            </div>
            <div className="row">
                <button id="play" onClick={props.onClickPlay} >
                    <i className="fas fa-play" />
                </button>
                <button id="pause" onClick={props.onClickPause} >
                    <i className="fas fa-pause" />
                </button>
                <button id="refresh" onClick={props.onClickRefresh} >
                    <i className="fas fa-redo-alt" />
                </button>
            </div>
        </div>
    )
}

export default Timer;