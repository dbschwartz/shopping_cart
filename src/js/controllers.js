//  Initialize the Controllers

angular
  .module('app')
  .controller('homeCtrl', homeCtrl);


homeCtrl.$inject = ['$scope', 'teaService', 'cartService'];

function homeCtrl($scope, teaService, cartService) {
  $scope.teaList = teaService.getTeaList();
  updateCartNotification()
  $scope.addTea = function(id, quantity) {
    var cart = cartService.addTea(id, quantity);
    console.log(cart);
    updateCartNotification()
  };

  function updateCartNotification() {
  $scope.cartNotification = cartService.getCart().length;
  if($scope.cartNotification===0){
    $scope.cartNotification="Empty";
  } else {
    $scope.cartNotification="("+$scope.cartNotification+")";
  }
  }
}