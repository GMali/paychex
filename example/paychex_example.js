'use strict';

var Paychex = require('../lib/paychex.js');

var stub = new Paychex(file);
// => [ 'Payrolls by Paychex, Inc.',
//      'PERSONAL AND CHECK INFORMATION',
//      ...
//     ]