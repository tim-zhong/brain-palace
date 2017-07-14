/**
 * Created by timzhong on 2017-07-13.
 */
'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

var WelcomePage = require('../lib/shared/components/welcome/welcome-page.jsx');

var router = express.Router();

module.exports = router;

router.use(bodyParser.json());

router.get('/', function(req, res) {
     getWelcomeHtml(req, res);
});

function getWelcomeHtml(req, res) {
     var props = {
         consoleUrl: req.consoleUrl,
         headerHtml: req.headerHtml
     };
     res.render('welcome-page', {
         content: ReactDOMServer.renderToString(React.createElement(WelcomePage, props)),
         title: 'Welcome Page'
     });
}