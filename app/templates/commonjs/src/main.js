'use strict';
var React = require('react/addons');
var hello = require('./templates/commonjs/src/hello');

React.render(hello(), document.getElementById('container'));
