'use strict';
var React = require('react/addons');
var template = require('./hello.rt.js');

var hello = React.createClass({
    displayName: 'Hello',
    render: template
});

module.exports = hello;
