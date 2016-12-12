import './component-viewer.css';
import React from 'react';
import ReactDOM from 'react-dom';

//to test a component register it here
import ProgressBar from '../components/progress-bar/progress-bar.jsx';
import Search from '../components/search/search.jsx';

const components = {
    ProgressBar: ProgressBar,
    Search: Search
};

//let componentNameInput = document.getElementById('component-name');
let componentContainer = document.getElementById('component-container');
let componentNameList = document.getElementById('component-list');

export class Wrapper extends React.Component {
    render() {
        return <div>
            <div className="dashboard">
                <label>
                    Choose a component to view:
                    <ComponentNameList/>
                </label>
            </div>
            <ComponentReview/>
        </div>

    }
}

export class ComponentNameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: Object.keys(components),
            value: Object.keys(components)[0]
        };
        this.handleChanhge = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    render() {
        return <select value={this.state.value} onChange={this.handleChange}>
            {this.state.values.map(function(val, inx) {
                return <option key={inx} value={val}>{val}</option>
            })}
        </select>
    }
}

export class ComponentReview extends React.Component {

    constructor(props) {
        this.defaultProps = {name: ""};
    }


    render() {
        if (name) {
            let DynamicComponent = components[this.props.name];
            return <DynamicComponent name={componentNameInput.value}/>;
        }
        return <div>No component is chosen</div>


    }
}



document.getElementById('show-component').onclick = function() {
    ReactDOM.render(<Wrapper name={componentNameInput.value}/>, componentContainer);
};


ReactDOM.render(<Wrapper/>, componentNameList);

