'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

module.exports = function (target) {

  var generatorPath = '../generators/' + target;

  describe('miruken:' + target, function () {

    var fileName = 'myName.js';

    describe('all prompts', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, generatorPath))
          .withArguments([])
          .withPrompts({
            name: 'myName',
            parent: 'myParent',
            namespace: 'myNamespace'
          })
          .on('end', done);
      });

      testAssertions({parent: true});
    });

    describe('all arguments', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, generatorPath))
          .withArguments(['myName', 'myParent', 'myNamespace'])
          .on('end', done);
      });

      testAssertions({parent: true});
    });

    describe('arguments and prompts', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, generatorPath))
          .withArguments(['myName'])
          .withPrompts({
            parent: 'myParent',
            namespace: 'myNamespace'
          })
          .on('end', done);
      });

      testAssertions({parent: true});
    });

    describe('no parent', function () {
      before(function (done) {
        helpers.run(path.join(__dirname, generatorPath))
          .withArguments(['myName'])
          .withPrompts({
            parent: '',
            namespace: 'myNamespace'
          })
          .on('end', done);
      });

      testAssertions({parent: false});
    });

    function testAssertions(options) {

      it('creates file', function () {
        assert.file('myName.js');
      });

      it('sets package variable', function () {
        assert.fileContent(fileName, 'var myNamespace = new base2.Package');
      });

      it('sets package name', function () {
        assert.fileContent(fileName, "name:    'myNamespace'");
      });

      it('handle parent variable', function () {
        if (options.parent === true) {
          assert.fileContent(fileName, "parent:  myParent");
        } else {
          assert.noFileContent(fileName, 'parent:');
        }
      });

      it('exports the class', function () {
        assert.fileContent(fileName, "exports: 'MyName'");
      });

      it('uses uppercase name for the class name', function () {
        assert.fileContent(fileName, 'var MyName = ');
      });
    }

  });

};

