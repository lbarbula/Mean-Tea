angular
  .module('teaApp')
  .controller('selectedController', ['$scope', 'getInformation', function($scope, getInformation) {
    $scope.view = {}
    $scope.view.selected = getInformation.getSelectedTeas()
    $scope.view.getCart = getInformation.getNumberOrdered()
    $scope.view.getTotal = getInformation.getTotalCost()
    $scope.view.removeTea = function (tea, id) {
      getInformation.removeTea(tea, id)
    }
    $scope.view.getNewTeas = function () {
      $scope.view.selected = getInformation.getSelectedTeas()
    }
    $scope.view.getNewTotal  = function () {
      $scope.view.getTotal = getInformation.getTotalCost()
    }
  }])
