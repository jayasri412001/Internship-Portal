var app = angular
    .module('InternshipPortalApp', [])
    .controller('InternshipPortalAddController', InternshipPortalAddController)
    .controller('InternshipPortalShowController', InternshipPortalShowController)
    .service('InternshipPortalService', InternshipPortalService)
    

     
	.directive('firstDirective', function()  {
	function linkedFunction($scope, element, attributes)  {
		$scope.text = " One resource for all internship programmes ";
		
		$scope.changeText = function (newText) {
			$scope.text = newText;
		}
	}
	return  {
		link : linkedFunction,
		template : '<span ng-click="changeText"> {{  text  }}</span>',
		
	};
});
app.controller('mycontroller', function () {
});






app.factory('myFactory', function () {
var displayFact;
var addMSG = function (msg) {
displayFact = ' Welcome ' + msg;
}
return {
setMSG: function (msg) {
addMSG(msg);
},
getMSG: function () {
return displayFact;
}
};
});
app.controller("myCtrl", function ($scope,  myFactory) {

myFactory.setMSG("Student");

 

$scope.myCollections = [
myFactory.getMSG(),

];
});
	
   



InternshipPortalAddController.$inject = ['InternshipPortalService'];
function InternshipPortalAddController(InternshipPortalService) {
    var inten = this;
	
	inten.jop = '';
    inten.compname = '';
    
	inten.sal = '';
    inten.duer= '';
    inten.locat = '';
    inten.addItem = function () {
        InternshipPortalService.addItem(inten.jop, inten.compname,  inten.sal, inten.duer, inten.locat);
    };
	
}

InternshipPortalShowController.$inject = ['InternshipPortalService'];
function InternshipPortalShowController(InternshipPortalService) {
	
	
    var showList = this;
    showList.items = InternshipPortalService.getItems();
    showList.removeItem = function (itemIndex) {
        InternshipPortalService.removeItem(itemIndex);
    };
}
function InternshipPortalService() {
    var service = this;
	
var items = [{compname:"zoho",jop:"data structure",sal:"30000",duer:"4",locat:"chennai"}];
    service.addItem = function (jop, compname, sal,duer,locat) {
        var item = { jop: jop, compname: compname,sal:sal ,duer:duer ,locat:locat};
        items.push(item);
    };
    service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
    };
    service.getItems = function () {
        return items;
    };
}

