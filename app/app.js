// Search by category with drop down list

// Checkout page
// Ability to edit quantity
// Editing quantity updates the sub-total and order total
// Ability to remove a product, which then updates the order total
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
