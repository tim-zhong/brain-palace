/**
 * Created by timzhong on 2017-07-27.
 */

'use strict';

var client = require('./client');

/*
 * A function wrapper in which to require non-js files, e.g. scss and properties files and any
 * other static resource.
 *
 * This has no effect on the server, where you can't require static files like this, but it does add to
 * the webpack dependency graph which affects the files that are output. It also injects modules
 * on the client when needed to load the resources.
 */

module.exports = function(func) {
    if (client) {
        // these modules only resolve on the client due to the fact that they're webpack-ed into
        // actual js modules. The require call is needed to have the modules evaluated.
        func();
    }
};
