(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['appname.router', 'appname.ctrl'];
	var cons = ['appname.constant'];
	var serv = ['appname.sig.service', 'appname.service'];
	var dir = ['appname.dir', 'appname.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* appname Module
	*
	* The main module of this application...
	*/
	angular.module('appname', depedencyArr);

	angular.module('appname.router', ['ui.router']);
	angular.module('appname.constant', []);
	angular.module('appname.sig.service', []);
	angular.module('appname.service', []);
	angular.module('appname.ctrl', []);
	angular.module('appname.dir', ['appname.service', 'appname.sig.service']);
	angular.module('appname.cust.dir', ['appname.service', 'appname.sig.service']);

})();
(function () {
	var rM = angular.module('appname.router');

	// rM

})();
(function () {
	var cosM = angular.module('appname.constant');

})();
(function () {
	var ctrlM = angular.module('appname.ctrl');

	// ctrlM

})();
(function () {
	var cdM = angular.module('appname.cust.dir');

	// cdM

})();
(function () {
	var dM = angular.module('appname.dir');

	// dM

})();
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('appname.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('appname.sig.service');

	// ssM

})();
// jQuery Js Document
$(document).ready(function() {
	notice ();
	initWow ();
});

function notice () {
	alert('pls, disable this function.'+window.location);
}

function initWow () {
	new WOW().init();
}