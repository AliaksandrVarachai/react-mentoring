import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './component-styles.css';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            showActive: true,
            criterion: 'click here'
        }
    }

    render() {
        return <div styleName='search'>
            <label styleName='show-active-container'>
                <input styleName='show-active' type='checkbox'/>
                Show active
            </label>
            <div styleName='search-string-container'>
                <input type="text" placeholder="Search" styleName='search-string'/>
                <div styleName='erase icon icon-cross'></div>
            </div>
        </div>
    }

}

//export default Search;
export default CSSModules(Search, styles, {allowMultiple: true});