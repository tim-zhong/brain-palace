/**
 * Created by timzhong on 2017-08-01.
 */
'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

var CreatePage = require('../lib/shared/components/create/create-page.jsx');

var router = express.Router();

module.exports = router;

router.use(bodyParser.json());

router.get('*', function(req, res) {
    getCreateHtml(req, res);
});

function getCreateHtml(req, res) {
    var props = {
        consoleUrl: req.consoleUrl,
        headerHtml: req.headerHtml
    };
    res.render('create-page', {
        content: ReactDOMServer.renderToString(React.createElement(CreatePage, props)),
        title: 'Create Page',
        props: props
    });
}