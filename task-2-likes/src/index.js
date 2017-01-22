import './styles.css';
import 'file!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';

import Item from './components/item';

console.log('index.js is loaded');

class App extends React.Component {

    render() {

        return (
            <Item/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app-container'));
