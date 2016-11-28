import ProgressBar from '../../components/progress-bar/index.jsx';

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        return <div className="header">
            <div className="pageName">to-do list</div>
            <div className="search">Search component here</div>
            <div className="progressBar"></div>
        </div>
    }
}

//TODO: change to className
ReactDOM.render(<Header/>, document.getElementById("header"));
//ReactDOM.render(<ProgressBar/>, document.getElementById("progressBar"));
