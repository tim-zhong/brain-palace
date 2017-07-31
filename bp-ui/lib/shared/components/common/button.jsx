/**
 * Created by timzhong on 2017-07-17.
 */
'use strict';

var React = require('react'),
    resources = require('../../resources');

resources(function() {
    require('../../../../scss/common/_button.scss');
});

var Button = React.createClass({
    render: function() {
        return (
            <a href={this.props.href} className={"button " + (this.props.className || '')}>{this.props.text}</a>
        );
    }
});

module.exports = Button;