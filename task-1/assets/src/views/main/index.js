import ProgressBar from '../../components/progress-bar/progress-bar.jsx';
import ProgressBarStyles from '../../components/progress-bar/progress-bar.css';
import Search from '../../components/search/search.jsx';
import SearchStyles from '../../components/search/search.css';
//import CSSModules from 'react-css-modules';
import './index.css';
import 'file!../../../../views/main.html';

import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        return <div>
            <div className='row'>
                <div className="search"><Search styles={SearchStyles}/></div>
                <div className='page-name'>to-do list</div>
            </div>
            <ProgressBar styles={ProgressBarStyles} />
        </div>
    }
}

ReactDOM.render(<Header/>, document.getElementsByClassName("page-header")[0]);
