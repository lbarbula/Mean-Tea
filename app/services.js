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
      tea['quantity'] = parseInt(num)
      tea['subtotal'] = tea.price * num
      tea['increaseQuantity'] = function () {
        let index = selectedTeas.indexOf(tea)
        this.quantity += 1
        this.subtotal = tea.price * this.quantity
        totalCost[index] += tea.price
      }
      tea['decreaseQuantity'] = function () {
        let index = selectedTeas.indexOf(tea)
        this.quantity -= 1
        this.subtotal = tea.price * this.quantity
        totalCost[index] -= tea.price
      }
      selectedTeas.push(tea)
      totalCost.push(tea.subtotal)
    },
    getCategories: $http.get('tea.json')
      .then(function(data){
        var categories = []
        var teaData = data.data
        teaData.forEach(tea => {
          tea.categories.forEach(category => {
            if(!categories.includes(category)) {
              categories.push(category)
            }
            })
          })
        return categories
      }),
    getSelectedTeas: () => {
      return selectedTeas
    },
    getNumberOrdered: () => {
      return selectedTeas.length;
    },
    getTotalCost: () => {
      return totalCost.reduce(function(previousValue, currentValue) {
          return previousValue + currentValue
        }, 0)
    },
    removeTea: (tea) => {
        let removed = selectedTeas.indexOf(tea)
        selectedTeas.splice(removed, 1)
        totalCost[0] -= tea.subtotal
        totalCost.splice(removed, 1)
      }
    }
  }
