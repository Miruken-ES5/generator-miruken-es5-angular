new function () {

  var home = new base2.Package(this, {
    name:    'home',
    parent:  <%= name %>,
    imports: 'miruken.callback,<%= name %>.greeting',
    exports: 'GreetingCallbackHandler'
  });

  eval(this.imports);

  var GreetingCallbackHandler = CallbackHandler.extend(Greeting, {
    message: function(){
      var messages = [
        'Hello',
        'Howdy',
        'Hola',
        'Hi',
        'Shalom',
        'Bonjour'
      ];
      return messages[getRandomInt(0, messages.length)];
    }
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    return Math.floor((Math.random() * 10) + 1);
  }

  eval(this.exports);

}
