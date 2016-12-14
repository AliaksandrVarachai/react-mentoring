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

export class Wrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            values: Object.keys(components),
            value: ""//Object.keys(components)[0]
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(value) {
        this.setState({value: value});
    }

    render() {
        return <div>
            <div className="dashboard">
                <label>
                    Choose a component to view:
                    <ComponentNameList values={this.state.values} changeValue={this.changeValue}/>
                </label>
            </div>
            <div className="component-container">
                <ComponentReview name={this.state.value}/>
            </div>
        </div>

    }
}

class ComponentNameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.changeValue(event.target.value);
        this.setState({selected: event.target.value || null})
    }

    render() {
        return <select value={this.state.selected || ""} onChange={this.handleChange}>
            <option key="-1" value="">-- List of components: --</option>
            {this.props.values.map(function(val, inx) {
                return <option key={inx} value={val}>{val}</option>
            })}
        </select>
    }
}

class ComponentReview extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.name) {
            let DynamicComponent = components[this.props.name];
            if (DynamicComponent) {
                return <DynamicComponent/>;
            }
        }
        return <span className="no-component">No component is chosen</span>

    }
}

ReactDOM.render(<Wrapper/>, document.getElementById('wrapper'));

