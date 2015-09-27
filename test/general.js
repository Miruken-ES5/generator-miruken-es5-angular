'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('general', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, 'temp'))
      .withOptions({
        'skip-install': true
      })
      .withPrompts({features: []})
      .withGenerators([
        [helpers.createDummyGenerator(), 'mocha:app']
      ])
      .on('end', done);
  });

  it('the generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    require('../app');
  });

  it('creates expected files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'gulpfile.babel.js',
      '.editorconfig',
      '.bowerrc',
      '.gitignore',
      '.gitattributes',
      'src/favicon.ico',
      'src/apple-touch-icon.png',
      'src/robots.txt',
      'src/index.html',
      'src/scripts/main.js',
      'src/styles/main.css',
      'src/images',
      'src/fonts',
      'test'
    ]);
  });
});
