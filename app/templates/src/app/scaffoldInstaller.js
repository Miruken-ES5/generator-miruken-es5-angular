new function() {

  var <%= name %> = new base2.Package(this, {
    name:    '<%= name %>',
    imports: 'miruken.ng,miruken.ioc',
    exports: '<%= capitalName %>Installer,<%= capitalName %>Runner',
    ngModule: [
        'ui.router'
    ]
  });

  eval(this.imports);

  var <%= capitalName %>Installer = Installer.extend({
    $inject: ['$urlRouterProvider'],
    constructor: function($urlRouterProvider){
      $urlRouterProvider.otherwise('/');
    }
  });

  var <%= capitalName %>Runner = Runner.extend({
    $inject: ['$rootScope', '$state'],
    constructor: function ($rootScope, $state) {
      // Requiring $state in a run forces the  ui-router to
      // register a listener for '$locationChangeSuccess'
      // before it is raised by the  angular.bootstrap function.
      // Also adding it to the $rootScope for convenience
      $rootScope.$state = $state;
    }
  });

  eval(this.exports);

};
