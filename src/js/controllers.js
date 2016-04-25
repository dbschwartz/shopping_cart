//  Initialize Controllers

angular
  .module('app')
  .controller('homeCtrl', homeCtrl);


homeCtrl.$inject = ['$scope', 'teaService'];

function homeCtrl($scope, teaService) {
  console.log("cool");
  $scope.teaList = teaService.getTeaList();

}