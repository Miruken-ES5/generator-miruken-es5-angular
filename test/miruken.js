'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('miruken', function () {
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

  it('creates expected files', function () {
    assert.file([
      'src/app/tempInstaller.js',
      'src/app/about/about.html',
      'src/app/about/aboutController.js',
      'src/app/about/aboutInstaller.js',
      'src/app/home/home.html',
      'src/app/home/homeController.js',
      'src/app/home/homeInstaller.js'
    ]);
  });

  describe('updates variables', function () {

    it('scaffoldInstaller', function () {
      var path = 'src/app/tempInstaller.js';
      assert.fileContent(path, "exports: 'TempInstaller,TempRunner',");
      assert.fileContent(path, 'var TempRunner = Runner.extend({');
      assert.fileContent(path, 'var temp = new base2.Package(this, {');
      assert.fileContent(path, "name:    'temp',");
      assert.fileContent(path, 'var TempInstaller = Installer');
    });

    it('sets the parent', function () {
      var paths = 'src/app/home/homeInstaller.js';
      for(var i = 0; i < path.length; i++){
        assert.fileContent(paths[i], "parent:  temp,");
      }
    });

    it('index.html', function(){
      var path = 'src/index.html';
      assert.fileContent(path, 'ng-app="temp"');
      assert.fileContent(path, '<a class="navbar-brand" href="#/">Temp</a>');
    });

  });
});
