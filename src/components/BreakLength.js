import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BreakLength = (props) => {
    return (
        <div className="break">
            <h5 id="break-label" className="row">Break Length</h5>
            <div className="row">
                <button id="break-increment" 
                    onClick={props.breakLengthIncrement}
                ><i className="fas fa-plus" /></button>
                <h3 id="break-length" >{props.breakLength}</h3>
                <button id="break-decrement" 
                    onClick={props.breakLengthDecrement}
                ><i className="fas fa-minus" /></button>
            </div>
        </div>
    )
}

export default BreakLength;