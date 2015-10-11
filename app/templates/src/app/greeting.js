new function() {

  var greeting = new base2.Package(this, {
    name:    'greeting',
    parent:  <%= name %>,
    imports: 'miruken,miruken.callback',
    exports: 'Greeting'
  });

  eval(this.imports);

  var Greeting = Protocol.extend(Resolving, {
    message: function () {}
  });

  eval(this.exports);

};
