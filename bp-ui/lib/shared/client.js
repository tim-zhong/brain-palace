/**
 * Created by timzhong on 2017-07-25.
 */
'use strict';

/*
 * A boolean module that is true on the client, false on the server. This is for code that needs to
 * do different things on the server vs the client.
 */

module.exports = (typeof window !== 'undefined');
