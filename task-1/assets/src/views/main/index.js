import ProgressBar from '../../components/progress-bar/progress-bar.jsx';
import Search from '../../components/search/search.jsx';
//import CSSModules from 'react-css-modules';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        return <div>
            <div className='row'>
                <div className="search"><Search/></div>
                <div className='page-name'>to-do list</div>
            </div>
            <ProgressBar/>
        </div>
    }
}

ReactDOM.render(<Header/>, document.getElementsByClassName("page-header")[0]);
