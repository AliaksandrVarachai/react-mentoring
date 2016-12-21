require('./styles.css');
require('file!../index.html');

document.onload = function() {
    console.log('js is loaded');
};

document.getElementById('go').onclick = function() {
    console.log('hi');
};
