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