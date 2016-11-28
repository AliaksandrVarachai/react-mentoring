import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';

export class ProgressBar extends React.Component {
    render() {
        return <div className="progressBar">
            <div className="percentCompleted"></div>
        </div>
    }
}

//TODO: change to className
ReactDOM.render(<ProgressBar/>, document.getElementById("progressBar"));