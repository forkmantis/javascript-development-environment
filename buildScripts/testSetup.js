// This file isn't transpiled, so it must use CommonJS and ES5


// Require Babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['css'] = function() {};

