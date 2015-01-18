'use strict';
var React = require('react/addons');
var hello = require('./hello');

var elem = React.createElement(hello);
React.render(elem, document.getElementById('container'));
