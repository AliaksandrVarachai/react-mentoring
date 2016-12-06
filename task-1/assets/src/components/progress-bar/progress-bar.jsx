import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './progress-bar.css';

class ProgressBar extends React.Component {
    constructor() {
        super();
        this.state = {
            "percentCompleted": 60
        }
    }

    render() {
        return <div styleName='progress-bar'>
            <div styleName='percent-completed'></div>
        </div>
    }
}

export default CSSModules(ProgressBar, styles);