import ProgressBar from '../../components/progress-bar/index.jsx';
import Search from '../../components/search/index.jsx';

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        return <div>
            <div className="v-row">
                <Search/>
                <div className="v-page-name">to-do list</div>
            </div>
            <ProgressBar/>
        </div>
    }
}

ReactDOM.render(<Header/>, document.getElementById("p-header"));
