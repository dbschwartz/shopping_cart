//  Initialize Controllers

angular
  .module('app')
  .controller('homeCtrl', homeCtrl);


homeCtrl.$inject = ['$scope', 'teaService', 'cartService'];

function homeCtrl($scope, teaService, cartService) {
  console.log("cool");
  $scope.teaList = teaService.getTeaList();
  $scope.addTea = function(id, quantity){
    var tea = 
    cartService.addTea(tea, quantity);
  }
}