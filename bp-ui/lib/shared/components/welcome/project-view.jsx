/**
 * Created by timzhong on 2017-07-17.
 */
'use strict';
var React = require('react'),
    xhr = require('../../../client/xhr'),
    ProjectTilesView = require('./project-tiles-view.jsx');

var ProjectView = React.createClass({
    getInitialState: function() {
        return {
            projects: [],
        }
    },

    componentDidMount: function() {
        this.loadProjects();
    },

    loadProjects: function() {
        console.log();
        xhr('http://localhost:3000/api/projects', {dataType: 'json'}, function(error, data) {
            if(error) {
                // ...
                console.log(error);
                return;
            }
            this.setState({projects: data});
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <h2>project-list</h2>
                <ProjectTilesView projects={this.state.projects}/>
            </div>
        );
    }
});

module.exports = ProjectView;