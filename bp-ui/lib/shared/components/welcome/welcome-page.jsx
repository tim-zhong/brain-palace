/**
 * Created by timzhong on 2017-07-14.
 */
'use strict';
var React = require('react'),
    ProjectView = require('./project-view.jsx'),
    pageInitializer = require('../../../client/page-initializer');

var WelcomePage = React.createClass({

   render: function() {
       return (
           <div className="page welcome-page">
               <ProjectView/>
           </div>
       );
   }
});

pageInitializer.init(WelcomePage);

module.exports = WelcomePage;