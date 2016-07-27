angular
  .module('teaApp')
  .controller('homeController', ['$scope', 'getInformation', function($scope, getInformation){
  $scope.quantitySearch = 1
  $scope.view = {}
  $scope.view.cartLoad = 0
  $scope.view.totalCost = 0
  $scope.view.results =
    getInformation.info
      .then(function(data){
        console.log(data.data)
        console.log("categories", data.data[0].categories)
        $scope.view.info = data.data
  })
  $scope.view.submitOrder = function (num, tea) {
    getInformation.submitOrder(num, tea)
    $scope.view.cartLoad = getInformation.getNumberOrdered()
    $scope.view.totalCost = getInformation.getTotalCost()
  }

}])
