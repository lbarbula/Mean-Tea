angular
  .module('teaApp')
  .filter('newCurrency', function () {
  return function (input) {
    return (input / 100).toFixed(2)
  };
});
