import './styles.css';
import 'file!../index.html';

document.onload = function() {
    console.log('js is loaded');
};

document.getElementById('go').onclick = function() {
    console.log('hi');
};

/* Loading of component here */
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './component.jsx';
import SearchStyles from './component-styles.css';


export class Header extends React.Component {
    render() {
        return <div>
            <div className='row'>I am a row from app.js</div>
            <Search styles={SearchStyles}/>
        </div>
    }
}

ReactDOM.render(<Header/>, document.getElementById("component"));
