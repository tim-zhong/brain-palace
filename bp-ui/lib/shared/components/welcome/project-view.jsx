/**
 * Created by timzhong on 2017-07-17.
 */
'use strict';
var React = require('react'),
    xhr = require('../../../client/xhr'),
    ProjectTilesView = require('./project-tiles-view.jsx'),
    Banner = require('../common/banner.jsx'),
    Button = require('../common/button.jsx'),
    resources = require('../../resources');

resources(function() {
    require('../../../../scss/welcome/_project-view.scss');
});;

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
            <div className="project-view">
                <Banner title="Projects">
                    <div className="project-view-actions">
                        <Button href="new-project" text="New project" className="btn-success"/>
                    </div>
                </Banner>
                <ProjectTilesView projects={this.state.projects}/>
            </div>
        );
    }
});

module.exports = ProjectView;