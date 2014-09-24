var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, quoteService){
	
	
	//$scope.quotes = quoteService.getData(); //This works, and could use, but then couldn't
	//rely on getData for other uses- like cookies- which I didn't get
	$scope.filterBoxAppear = false;
	$scope.addBoxAppear = false;
	$scope.removeBoxAppear = false;
	/*tried fixing the box issue with all booleans . . .works for the other
	two but hide input won't run, but if you open one, then the others are stuck
	and won't open until you click on the one to make it work.  What logic would
	prevail here?*/
	$scope.hideInputAdd = function() {
		if($scope.addBoxAppear) {
			$scope.removeBoxAppear = false;
			$scope.filterBoxAppear = false;
		} 
	}
	$scope.hideInputRemove = function() {
		if ($scope.removeBoxAppear) {
			$scope.addBoxAppear = false;
			$scope.filterBoxAppear = false;
		} 
	}
	$scope.hideInputFilter =function() {
		if ($scope.filterBoxAppear) {
			$scope.addBoxAppear = false;
			$scope.removeBoxAppear = false;
		}
	}

	$scope.addData = function() {
		quoteService.addData($scope.addQuoteText, $scope.addAuthorText);//get it pushed in the service
		$scope.addBoxAppear= !$scope.addBoxAppear;
		$scope.filterBoxAppear = false;
		
	}	

	$scope.removeData = function(){
		quoteService.removeData($scope.removeDataText);
		$scope.removeBoxAppear = !$scope.removeBoxAppear;
	}	

	


	var getData = function(){
		$scope.quotes = quoteService.getData();
	}
	getData();


});