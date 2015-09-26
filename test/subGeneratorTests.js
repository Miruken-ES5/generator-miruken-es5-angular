'use strict';

var test = require('./subGeneratorTestHelper');
var _ =    require('lodash');

var subGenerators = [
  'controller',
  'installer',
  'model',
  'module',
  'protocol',
  'runner'
];

_.each(subGenerators, test);
