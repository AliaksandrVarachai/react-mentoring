import {createStore, combineReducers} from 'redux';

function counter1(state, action) {
    Object.freeze(state);
    Object.freeze(action);
    if (typeof state === 'undefined') {
        return {
            number1: 0,
            number2: 0
        };
    }
    switch (action.type) {
        case 'INCREMENT_1':
            return Object.assign({}, state, {number1: state.number1 + 1});
        case 'DECREMENT_1':
            return Object.assign({}, state, {number1: state.number1 - 1});
        default:
            return state;
    }
}
function counter2(state, action) {
    Object.freeze(state);
    Object.freeze(action);
    if (typeof state === 'undefined') {
        return {
            number1: 0,
            number2: 0
        };
    }
    switch (action.type) {
        case 'INCREMENT_2':
            return {...state, number2: state.number2 + 1};
        case 'DECREMENT_2':
            return {...state, number2: state.number2 - 1};
        default:
            return state;
    }
}

var store = createStore(combineReducers({
    counter1,
    counter2
}));
var resultEl = document.getElementById('result');
var number1El = document.getElementById('number-1');
var number2El = document.getElementById('number-2');

function render() {
    var snapshot = store.getState();
    console.dir(snapshot);
    number1El.innerHTML = snapshot.counter1.number1;
    number2El.innerHTML = snapshot.counter2.number2;
    resultEl.innerHTML = snapshot.counter1.number1 + snapshot.counter2.number2;
}

render();
store.subscribe(render);

document.getElementById('inc-1').onclick = function() {
    store.dispatch({type: 'INCREMENT_1'});
};

document.getElementById('dec-1').onclick = function() {
    store.dispatch(({type: 'DECREMENT_1'}));
};

document.getElementById('inc-2').onclick = function() {
    store.dispatch({type: 'INCREMENT_2'});
};

document.getElementById('dec-2').onclick = function() {
    store.dispatch(({type: 'DECREMENT_2'}));
};
