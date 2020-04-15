import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SessionLength = (props) => {
    return (
        <div>
            <h5 id="session-label" className="row">Session Length</h5>
            <div className="row">
                <button id="session-increment"
                    onClick={props.sessionLengthIncrement}
                ><i className="fas fa-plus" /></button>
                <h3 id="session-length">{props.sessionLength}</h3>
                <button id="session-decrement"
                    onClick={props.sessionLengthDecrement}
                ><i className="fas fa-minus" /></button>
            </div>
        </div>
    )
}

export default SessionLength;