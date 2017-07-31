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
        xhr('http://localhost:4000/api/projects', {dataType: 'json'}, function(error, response) {
            if(error) {
                // ...
                console.log(error);
                return;
            }
            this.setState({projects: response.data});
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <h2>list</h2>
                <ProjectTilesView projects={this.state.projects}/>
            </div>
        );
    }
});

module.exports = ProjectView;