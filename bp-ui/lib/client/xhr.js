/**
 * Created by timzhong on 2017-07-17.
 */
'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/*
 * An XHR helper that simplifies requests from the client.
 *
 * @param url The request url
 * @param options (optional) The request options, which include:
 *    method - (optional) The http method, default 'GET'
 *    headers - (optional) An object containing the headers to send, e.g. {'Content-Type': 'application/json'}
 *    dataType - (optional) The type of data to return: 'text' or 'json'. e.g. for json the response will be parsed
 *    body - (optional) A JSON-serializable object to send in the body, for PUT, POST
 *    auth - (optional) True if 401 status code should be interpreted as session expiry. Defaults to true.
 * @param callback The callback, which will be called with an optional error param if there was an error, as well
 *    as the response body and raw xhr response.
 */
module.exports = function(url, options, callback) {
    // request json if dataType is json
    options = options || {};
    if (options.dataType === 'json') {
        if (!options.headers) {
            options.headers = {};
        }
        options.headers['Accept'] = 'application/json';
    }
    if (typeof options.auth === "undefined") {
        options.auth = true;
    }
    var xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', url);
    if (options.headers) {
        for (var header in options.headers) {
            if (options.headers.hasOwnProperty(header)) {
                xhr.setRequestHeader(header, options.headers[header]);
            }
        }
    }
    // for security and server-side request handling (e.g. handle auth differently for XHRs)
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    if (options.body) {
        xhr.setRequestHeader('Content-Type', 'application/json');
    }
    xhr.onload = function() {
        var contentType = xhr.getResponseHeader('Content-Type'),
            result = xhr.responseText;
        if (options.dataType === 'json' && contentType && contentType.indexOf('application/json') === 0) {
            try {
                result = JSON.parse(result);
            } catch (e) {
                callback(new Error('Error parsing response JSON: ' + result));
            }
        }
        if (xhr.status < 200 || xhr.status >= 300) {
            // tack on the response body message to the error object, either as plain text
            // or as JSON in the form { "description": "..." }
            var error = new Error('Error ' + xhr.status),
                description = typeof(result) === 'object' ? result.description : result,
                title = typeof(result) === 'object' ? result.title : result;
            if (typeof(description) === 'string') {
                error.description = description;
            }
            if (typeof(title) === 'string') {
                error.title = title;
            }
            callback(error, result, xhr);
            return;
        }
        callback(null, result, xhr);
    };
    xhr.onerror = function(error) {
        callback(error, null, xhr);
    };
    xhr.send(options.body ? JSON.stringify(options.body) : null);
};

