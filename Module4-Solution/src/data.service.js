(function () {
	'use strict';

	angular.module('Data')
	.service('DataService',DataService);

	DataService.$inject = ['$q','$timeout'];

	function DataService($q,$timeout) {
		var service = this;
	}
})();