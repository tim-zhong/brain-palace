/**
 * Created by timzhong on 2017-07-17.
 */
'use strict';

var React = require('react'),
    resources = require('../../resources');

resources(function() {
    require('../../../../scss/common/_banner.scss');
});

var Banner = React.createClass({
    render: function() {
        return (
            <div className="banner">
                <div className="cwidth">
                    <h1 className="banner-title">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Banner;