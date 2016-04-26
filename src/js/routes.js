// Initialization of the route configuration object
angular.module('app')
   .config(routeConfig);

// ** routeConfig ** //

// required dependencies
routeConfig.$inject = ['$routeProvider'];

// declaration of route config function
// that uses routeProvider service to define routes
function routeConfig($routeProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .when('/checkout',{
      templateUrl: 'templates/checkout.html',
      controller: 'checkoutCtrl'
    })
    .otherwise('/');
}
