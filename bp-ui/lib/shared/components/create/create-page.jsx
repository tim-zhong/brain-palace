/**
 * Created by timzhong on 2017-07-14.
 */
'use strict';
var React = require('react'),
    pageInitializer = require('../../../client/page-initializer');

var CreatePage = React.createClass({

    render: function() {
        return (
            <div className="page create-page">
                Create Page
            </div>
        );
    }
});

pageInitializer.init(CreatePage);

module.exports = CreatePage;