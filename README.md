# Paychex [![Build Status](https://secure.travis-ci.org/GMali/paychex.png?branch=master)](http://travis-ci.org/GMali/paychex)

> Parses Paychex PDF files into JSON data that you can work with



## Getting Started

Install the module with:
```sh
npm install paychex
```

Install with cli command

```sh
$ npm install -g paychex
$ paychex --help
$ paychex --version
```



## Examples

In your project:
```javascript
var Paychex = require('../lib/paychex.js');
var stub = new Paychex('my_paycheck.PDF');
// => [ 'Payrolls by Paychex, Inc.',
//      'PERSONAL AND CHECK INFORMATION',
//      ...
//     ]
```

Using CLI:
```sh
$ paychex my_paycheck.PDF
[ 'Payrolls by Paychex, Inc.',
  'PERSONAL AND CHECK INFORMATION',
  ...
]
```



## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).



## Repo structure

 - The main logic is in __/lib/paycheck.js__
 - __cli.js__ has the CLI version of this tool
 - __test/__ and __example/__ are what they say they are



## License

Copyright (c) 2014 Gaurav Mali  
Licensed under the MIT license.
