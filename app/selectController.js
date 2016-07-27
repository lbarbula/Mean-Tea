angular
  .module('teaApp')
  .controller('selectedController', ['$scope', 'getInformation', function($scope, getInformation) {
    $scope.view = {}
    $scope.view.selected = getInformation.getSelectedTeas()
    $scope.view.getCart = getInformation.getNumberOrdered()
    $scope.view.getTotal = getInformation.getTotalCost()
  }])
