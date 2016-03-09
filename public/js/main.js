angular.module('contatooh', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider.when('/contatos', {
    templateUrl: 'partials/contatos.html',
    controller: 'ContatosController'
  });

  $routeProvider.when('/contato/:contatoId', {
    templateUrl: 'partials/contato.html',
    controller: 'ContatoController'
  });

  // if the route not exist
  $routeProvider.otherwise({redirectTo: '/contatos'});
});
