angular.module('contatooh', ['ngRoute', 'ngResource'])
.config(function($routeProvider){

  $routeProvider.when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'ContatosController'
  });

  $routeProvider.when('/contato/:contatoId', {
    templateUrl: 'partials/contato.html',
    controller: 'ContatoController'
  });

  // if the route doesn't exist
  $routeProvider.otherwise({redirectTo: '/contatos'});
});
