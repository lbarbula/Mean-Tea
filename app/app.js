angular
  .module('teaApp', ['ui.router', 'ui.materialize'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,        $urlRouterProvider, $locationProvider) {

$urlRouterProvider.otherwise('/')
$stateProvider
.state('home', {
  url: '/',
  templateUrl: 'partials/home.html',
  controller: 'homeController'
}).state('selected', {
  url: '/selected',
  templateUrl: 'partials/selected.html',
  controller: 'selectedController'
})
  $locationProvider.html5Mode(true)
}])
