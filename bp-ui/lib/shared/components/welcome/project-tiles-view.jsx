/**
 * Created by timzhong on 2017-07-17.
 */
'use strict';

var React = require('react'),
    ProjectTile = require('./project-tile.jsx'),
    resources = require('../../resources');

resources(function() {
    //require('../../../../scss/welcome/');
});

var ProjectTilesView = React.createClass({
    render: function() {
        return (
            <div className="project-list cwidth">
                {(()=>{
                    return this.props.projects.map(function(project, i) {
                        return <ProjectTile key={i} name={project['project_name']}/>;
                    }.bind(this));

                })()}
            </div>
        );
    }
});

module.exports = ProjectTilesView;