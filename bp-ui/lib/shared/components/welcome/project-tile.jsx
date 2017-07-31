/**
 * Created by timzhong on 2017-07-17.
 */
'use strict';

var React = require('react'),
    resources = require('../../resources');

resources(function() {
    require('../../../../scss/welcome/_project-tile.scss');
});

var ProjectTile = React.createClass({
    render: function() {
        return <div className="project-tile">{this.props.name}</div>
    }
});

module.exports = ProjectTile;