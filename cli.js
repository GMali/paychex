#! /usr/bin/env node

'use strict';

var Paychex = require('./lib/paychex'),
    program = require('commander'),
    pkgjson = require('./package.json');

program
    .version(pkgjson.version)
    .usage('[options] <PDF-file>')
    .parse(process.argv);

program.args.forEach(function(file) {
    var stub = new Paychex(file);
});
