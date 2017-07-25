/**
 * Created by timzhong on 2017-07-25.
 */
'use strict';

var client = require('../shared/client'),
    React = require('react'),
    ReactDOM = require('react-dom');

exports.init = function(clazz) {
    // no-op for server-side rendering
    if (client) {
        var props = JSON.parse(document.getElementById('props').textContent);

        var page = ReactDOM.render(React.createElement(clazz, props), document.getElementById('page-content'));
    }
}