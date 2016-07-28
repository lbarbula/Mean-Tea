angular
  .module('teaApp')
  .controller('homeController', ['$scope', 'getInformation', function($scope, getInformation){
  $scope.quantitySearch = 1
  $scope.view = {}
  $scope.view.cartLoad = 0
  $scope.view.totalCost = 0
    getInformation.getCategories
      .then(function(data){
        $scope.view.categories = data
      })

    getInformation.info
      .then(function(data){
        $scope.view.info = data.data
  })
  $scope.view.submitOrder = function (num, tea) {
    getInformation.submitOrder(num, tea)
    $scope.view.cartLoad = getInformation.getNumberOrdered()
    $scope.view.totalCost = getInformation.getTotalCost()
  }

}])
