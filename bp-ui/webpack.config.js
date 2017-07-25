/**
 * Created by timzhong on 2017-07-25.
 */
'use strict';
var path = require('path');

module.exports = {
    entry: {
        'welcome': './lib/shared/components/welcome/welcome-page.jsx'
    },

    output: {
        filename: 'js/[name].min.js',
        path: __dirname + '/public',
    },

    externals: {
        './require-server': 'var function(){}',  // replace require-server with empty function on client
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'],
                    }
                },
            }
        ]
    }
};