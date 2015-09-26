var Base = require('../MirukenGeneratorBase');

var Generator = Base.extend({
  prompting: function() {
    this._prompting();
  },
  writing: function() {
    this._write('controller.template');
  }
});

module.exports = Generator;
