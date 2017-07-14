/**
 * Created by timzhong on 2017-07-13.
 */
"use strict";

var express = require("express"),
    couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://localhost');
var bucket = cluster.openBucket('travel-sample', '6b9775edd0b2f8c2dde1fe60337b6d49', function(e) {
    if(e) throw Error(e);
});

var app = express();
exports.server = app;