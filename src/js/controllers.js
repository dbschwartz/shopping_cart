//  Initialize the Controllers

angular
  .module('app')
  .controller('homeCtrl', homeCtrl);


homeCtrl.$inject = ['$scope', 'teaService', 'cartService'];

function homeCtrl($scope, teaService, cartService) {
  $scope.teaList = teaService.getTeaList();
  $scope.addTea = function(id, quantity){
    // var tea = // what's happening here?
    cartService.addTea(tea, quantity);
  };
}