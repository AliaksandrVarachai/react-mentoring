import './styles.css';
import 'file!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect} from 'react-redux';

import Item from './components/item';

console.log('index.js is loaded');

let data = {
    "author": "Alex",
    "items":
    [
        {
            "name": "Stan Marsh",
            "avatarSrc": "http://www.southparkfan.ru/wall/images_large/avatars/001988.jpg",
            "greeting": "Oh my God, they killed Kenny!",
            "sayHello": false
        }, {
        "name": "Kyle Broflovski",
        "avatarSrc": "http://www.southparkfan.ru/wall/images_large/avatars/002004.jpg",
        "greeting": "You bastards!",
        "sayHello": false
    }, {
        "name": "Eric Cartman",
        "avatarSrc": "http://www.southparkfan.ru/wall/images_large/avatars/001980.jpg",
        "greeting": "Screw you guys, I'm going home.",
        "sayHello": false
    }, {
        "name": "Kenny McCormick",
        "avatarSrc": "http://www.southparkfan.ru/wall/images_large/avatars/001991.jpg",
        "greeting": "Bo boo bo boo bo booboo bob boo:)",
        "sayHello": false
    }, {
        "name": "Leopold Stotch",
        "avatarSrc": "http://www.southparkfan.ru/wall/images_large/avatars/002015.jpg",
        "greeting": "Hi! My name is Butters!",
        "sayHello": false
    }, {
        "name": "Wendy Testaburger",
        "avatarSrc": "http://www.southparkfan.ru/wall/images_large/avatars/001999.jpg",
        "greeting": "Glad to see you!",
        "sayHello": false
    }
    ]
};

let reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return data;
        case 'SAY_HELLO':
            //TODO: add logic for checkbox
            return data;
        default:
            return data;
    }
};

class App extends React.Component {
    constructor() {
        super();
        this.state = {}; //for any case
    }

    componentDidMount() {
        const {store} = this.props;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());

        fetch("https://dl.dropboxusercontent.com/s/u7bx7ffexwuqtqc/init.json")
            .then(response => response.json())
            .then(data => {
                console.dir(data.items);
                //store.dispatch({type: 'null'});
                this.setState({items: data.items})
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store} = this.props;
        const state = store.getState();
        return (
            <Provider store={createStore(reducer)}>
                {state.items ? state.items.map(item => (
                    <Item
                        name={item.name}
                        avatarSrc = {item.avatarSrc}
                        greeting={item.greeting}
                        sayHello={item.sayHello}
                    />
                )) : ""}
            </Provider>
        )
    }
}

class Provider extends React.Component {
    render() {
        return this.props.children;
    }
}

ReactDOM.render(<App store={createStore(reducer)}/>, document.getElementById('app-container'));
