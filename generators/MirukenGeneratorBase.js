var generators = require('yeoman-generator'),
    path =       require('path'),
    _ =          require('lodash');

module.exports =  generators.Base.extend({
	constructor: function() {
    generators.Base.apply(this, arguments);

    this.argument('name',      { type: 'string', required: false });
    this.argument('parent',    { type: 'string', required: false });
    this.argument('namespace', { type: 'string', required: false });

		this.sourceRoot(path.join(this.sourceRoot(), '../../templates'));
	},
  _prompting: function() {
    var done = this.async();

    var prompts = [];

    if(!this.name) {
      prompts.push({
        type: 'input',
        name: 'name',
        message: 'name?',
        default: ''
      });
    }

    if(!this.parent) {
      prompts.push({
        type: 'input',
        name: 'parent',
        message: 'parent?',
        default: ''
      });
    }

    if(!this.namespace) {
      prompts.push({
        type: 'input',
        name: 'namespace',
        message: 'namespace?',
        default: ''
      });
    }

    this.prompt(prompts, function (props) {
      this.name = this.name || props.name;
      this.parent = this.parent || props.parent;
      this.namespace = this.namespace || props.namespace;
      done();
    }.bind(this));

  },
  _write: function(template){
    this.fs.copyTpl(
      this.templatePath(template),
      this.destinationPath(this.name + '.js'),
      {
        name:        this.name,
        capitalName: _.capitalize(this.name),
        namespace:   this.namespace,
        parent:      this.parent,
      }
    );
  }
});
