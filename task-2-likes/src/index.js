import './styles.css';
import 'file!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';

import Item from './components/item';

console.log('index.js is loaded');

class App extends React.Component {
    constructor() {
        super();
        this. state = {};
    }

    componentDidMount() {
        fetch("https://dl.dropboxusercontent.com/s/u7bx7ffexwuqtqc/init.json")
            .then(response => response.json())
            .then(data => {
                console.dir(data.items);
                this.setState({items: data.items})
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.dir(this.state)
        console.dir('render')
        return (
            <div>
                {this.state.items ? this.state.items.map(item => (
                    <Item
                        name={item.name}
                        avatarSrc = {item.avatarSrc}
                        greeting={item.greeting}
                        sayHello={item.sayHello}
                    />
                )) : ""}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app-container'));
