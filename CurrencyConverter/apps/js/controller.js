
angular.module('myApp.controllers',[]).
controller('CurrencyController',function($scope){

	$scope.USD = 0;
	$scope.GEL = 0;
	$scope.usd_to_euro = 0;
	$scope.euro_to_gel = 0;
	$scope.gel_to_euro = 0;
	$scope.euro_to_usd = 0;


	$scope.USD_to_GEL = function() {
		return $scope.USD * 2.3258;
	}
	$scope.GEL_to_USD = function() {
		return $scope.GEL / 2.3258;
	} 
	$scope.USD_to_EURO = function() {
		return $scope.usd_to_euro * 1.1428;
	}
	$scope.EURO_to_USD = function() {
		return $scope.euro_to_usd / 2.3258;
	}
	$scope.EURO_to_GEL = function() {
		return $scope.euro_to_gel * 2.6128;
	}
	$scope.GEL_to_EURO = function() {
		return $scope.gel_to_euro / 2.6128;
	}

});


/* hello on three languages (onclick)*/

/*
angular.module('myApp.controllers',[]).
controller('GreetingController', function($scope){
	$scope.now = new Date();
	$scope.helloMessage = ['გამარჯობა', 'Hello', 'olla'];
	$scope.greeting = $scope.helloMessage[0];
	$scope.getRandomMessage = function() {
		$scope.greeting = $scope.helloMessage[parseInt(( Math.random() * $scope.helloMessage.length ))];
	}
});
*/