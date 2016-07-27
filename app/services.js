angular
  .module('teaApp')
  .factory('getInformation', teaFactory)

function teaFactory($http){
  let selectedTeas = []
  let totalCost = []
  return {
    info: $http.get('tea.json')
      .then(function(data){
        return data
      }),
    submitOrder: (num, tea) => {
      tea['subtotal'] = tea.price * num
      tea['quantity'] = num
      selectedTeas.push(tea)
      totalCost.push(tea.subtotal)
      console.log(selectedTeas)
    },
    getSelectedTeas: () => {
      return selectedTeas
    },
    getNumberOrdered: () => {
      return selectedTeas.length;
    },
    getTotalCost: () => {
      return totalCost.reduce(function(previousValue, currentValue) {
          return previousValue + currentValue
    }, 0);
    }
  }
}
