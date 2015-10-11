new function() {

  var home = new base2.Package(this, {
    name:    'home',
    parent:  <%= name %>,
    imports: 'miruken.mvc,<%= name %>.greeting',
    exports: 'HomeController'
  });

  eval(this.imports);

  var HomeController = Controller.extend({
    $properties:{
      message: ''
    },
    initialize: function(){
      this.message = Greeting(this.context).message() + ', world!'
    }
  });

  eval(this.exports);

}
