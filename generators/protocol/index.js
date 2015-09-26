var Base = require('../MirukenGeneratorBase');

module.exports = Base.extend({
  prompting: function() {
    this._prompting();
  },
  writing: function() {
    this._write('protocol.template');
  }
});
