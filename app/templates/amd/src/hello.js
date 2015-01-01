define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';
    return React.createClass({
        displayName: 'Hello',
        render: function () {
            return template.apply(this);
        }
    });
});
