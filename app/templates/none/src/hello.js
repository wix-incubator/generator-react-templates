var hello = (function () {
    'use strict';
    return React.createClass({
        displayName: 'Hello',
        render: function () {
            return helloRT.apply(this);
        }
    });
}());
