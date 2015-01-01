'use strict';
var React = require('react/addons');
var template = require('./hello.rt.js');

module.exports = function () {
    return React.createClass({
        displayName: 'Hello',
        render: function () {
            return template.apply(this);
        }
    });
};
