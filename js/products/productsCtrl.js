angular.module('miniRouting')
  .controller('productsCtrl', function($scope, productsService, $stateParams) {

      console.log($stateParams.id)
      $stateParams.id === 'shoes' ? $scope.productData = productsService.shoeData : $scope.productData = productsService.sockData;
      console.log($scope.productData)
  })
