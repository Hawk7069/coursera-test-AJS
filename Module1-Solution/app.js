(function () {
	'use-strict';
	angular.module('LCApp', [])
	.controller('LCController', LCController);
	LCController.$inject = ['$scope']
	function LCController($scope) {
		$scope.dishes = "";
		$scope.msg = "Please enter data first";
		$scope.GetMsg = function () {
			$scope.dishes.trim();
			arr = $scope.dishes.split(',');
			if (arr.length==0 || arr[0]=="")
				$scope.msg = "Please enter data first";
			else if (arr.length<4)
				$scope.msg = "Enjoy!";
			else
				$scope.msg = "Too much!";
	}
	}
})();