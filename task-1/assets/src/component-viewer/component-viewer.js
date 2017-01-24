import './component-viewer.css';
import 'file!../../../component-viewer/index.html';
import React from 'react';
import ReactDOM from 'react-dom';

/* begin component's registration */
import ProgressBar from '../components/progress-bar/progress-bar.jsx';
import ProgressBarStyles from '../components/progress-bar/progress-bar.css';
import Search from '../components/search/search.jsx';
import SearchStyles from '../components/search/search.css';
import CategoryTree from '../components/category-tree/category-tree.jsx';
import CategoryTreeStyles from '../components/category-tree/category-tree.css';

const components = {
    ProgressBar: {component: ProgressBar, styles: ProgressBarStyles},
    Search: {component: Search, styles: SearchStyles},
    CategoryTree: {component: CategoryTree, styles: CategoryTreeStyles}
};
/* end component's registration */

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
            let DynamicComponent = components[this.props.name].component;
            let DynamicComponentStyles = components[this.props.name].styles;
            console.dir(DynamicComponentStyles);
            if (DynamicComponent) {
                return <DynamicComponent styles={DynamicComponentStyles}/>;
            }
        }
        return <span className="no-component">No component is chosen</span>
    }
}

ReactDOM.render(<Wrapper/>, document.getElementById('wrapper'));

