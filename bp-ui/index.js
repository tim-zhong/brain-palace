/**
 * Created by timzhong on 2017-07-13.
 */

"use strict";

var express = require('express'),
    dust = require('dustjs-linkedin'),
    consolidate = require('consolidate');

var welcome = require('./controllers/welcome');

var app = express();
app.engine('.dust', consolidate.dust);
app.use('/', express.static(__dirname + '/public', {
    redirect: false
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');


var router = express.Router();
router.all('/', welcome);

app.use(router);

app.listen('3001', function() {
    console.log('Listening on port 3001');
});
