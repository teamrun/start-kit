var cssjs = require('./css');
var vanilla$ = require('./vanilla$');

var util = {};

[cssjs, vanilla$].forEach(function(lib){
    for(var i in lib){
        util[i] = lib[i].bind(lib);
    }
});


module.exports = util;