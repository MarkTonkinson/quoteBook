var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, quoteService){
	
	
	//$scope.quotes = quoteService.getData(); //This works, but not the other?
	$scope.addBoxAppear = false;
	


	$scope.addData = function() {
		quoteService.addData($scope.addQuoteText, $scope.addAuthorText);//get it pushed in the service
		$scope.addBoxAppear= !$scope.addBoxAppear;
		
	}	

	$scope.removeData = function(){
		quoteService.removeData($scope.removeDataText);
		$scope.removBoxAppear = false;
	}

	$scope.filter


	var getData = function(){
		$scope.quotes = quoteService.getData();
	}
	getData();


});