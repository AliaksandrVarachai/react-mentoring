import "./index.css";
import React from 'react';

class ProgressBar extends React.Component {
    constructor() {
        super();
        this.state = {
            "percentCompleted": 60
        }
    }

    render() {
        return <div className="progress-bar">
            <div className="percent-completed" style={{width: this.state.percentCompleted+'%'}}></div>
        </div>
    }
}

export default ProgressBar;