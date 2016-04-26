//  Initialize the Controllers
angular
  .module('app')
  .controller('homeCtrl', homeCtrl)
  .controller('checkoutCtrl', checkoutCtrl)


homeCtrl.$inject = ['$scope', 'teaService', 'cartService'];
checkoutCtrl.$inject = ['$scope', 'cartService'];

function homeCtrl($scope, teaService, cartService) {
    $scope.teaList = teaService.getTeaList();
    updateCartNotification()

    $scope.addTea = function(id, quantity) {
        var cart = cartService.addTea(id, quantity);
        console.log(cart);
        updateCartNotification()
    };

    function updateCartNotification() {
        $scope.cartNotification = cartService.getCart().list.length;
        if ($scope.cartNotification === 0) {
            $scope.cartNotification = "Empty";
        } else {
            $scope.cartNotification = "(" + $scope.cartNotification + ")";
        }
    }
}

function checkoutCtrl($scope, cartService){
  $scope.cart = cartService.getCart();
  $scope.total = $scope.cart.total;
  $scope.deleteTea = function(id){
    cartService.deleteTea(id)
    $scope.cart = cartService.getCart(); 
    $scope.total = $scope.cart.total;
  }
}