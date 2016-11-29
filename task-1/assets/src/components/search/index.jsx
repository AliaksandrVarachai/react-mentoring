import './index.css';
import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            showActive: true,
            criterion: 'click here'
        }
    }

    render() {
        return <div className="search">
            <label className="show-active-container">
                <input type="checkbox" className="show-active"/>
                Show active
            </label>
            <div className="search-string-container">
                <input type="text" placeholder="Search" className="search-string"/>
                <div className="erase">x</div>
            </div>
        </div>
    }

}

export default Search;