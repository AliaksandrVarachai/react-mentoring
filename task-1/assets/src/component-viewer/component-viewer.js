import './component-viewer.css';
import React from 'react';
import ReactDOM from 'react-dom';

//to test a component register it here
import ProgressBar from '../components/progress-bar/progress-bar.jsx';
import Search from '../components/search/search.jsx';

let showComponentObj = document.getElementById('show-component');
let componentNameObj = document.getElementById('component-name');

showComponentObj.onclick = function() {
    let componentName = componentNameObj.value;
    ReactDOM.render(<componentName/>, document.getElementById("component-container"));
};

