(function () {
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	function ToBuyController(ShoppingListCheckOffService) {
		var STB = this;
		STB.items = ShoppingListCheckOffService.getItemsToBuy();
		STB.Bought = function (itemIndex) {
			ShoppingListCheckOffService.Bought(itemIndex);
		};
		STB.check= function () {
			if (STB.items.length == 0)
				return true
		};
	}

	function AlreadyBoughtController(ShoppingListCheckOffService) {

		var ABC = this;
		ABC.items = ShoppingListCheckOffService.getItemsBought();
		ABC.check= function () {
			if (ABC.items.length == 0) {
				return true
			}
		};
	}

	function ShoppingListCheckOffService() {
			var s = this;
			var itemsToBuy = [{name: "Cookies", quantity: "5"},
			{name: "Fruit Drink", quantity: "10"},
			{name: "Nut Cookies", quantity: "5"},
			{name: "Coca-Cola", quantity: "10"},
			{name: "Pepto Bismol", quantity: "5"}];

			var itemsBought = [];

			s.Bought = function (itemIndex) {
				var x = itemsToBuy[itemIndex];
				itemsBought.push(x);
				itemsToBuy.splice(itemIndex, 1);
			};

			s.getItemsBought = function () {
				return itemsBought;
			};

			s.getItemsToBuy = function () {
				return itemsToBuy;
			};
		}	
})();