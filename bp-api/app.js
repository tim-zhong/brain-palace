/**
 * Created by timzhong on 2017-07-13.
 */
"use strict";

var express = require("express"),
    couchbase = require('couchbase');

var cluster = new couchbase.Cluster('couchbase://localhost');

var app = express();
exports.server = app;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.get('/api/projects', function(req, res){
    var bucket = cluster.openBucket('projects', '48c73edcd7b53a2cbca803116eaf4098', function(e) {
        if(e) throw Error(e);
    });

    var qs = 'SELECT * from `projects`;';

    var q = couchbase.N1qlQuery.fromString(qs);

    bucket.query(q, function(err, rows) {
        if (err) {
            res.status(500).send({
                error: err
            });
            return;
        }

        res.send({
            data: rows,
            context: [qs]
        });
    });

});