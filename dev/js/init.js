function _gebi(id){
	return document.getElementById(id);
};

(function(){
	'use strict';

	//versions to check if support is higher than
	var checkVersions = {
		ie: 10,
		chrome: 16,
		firefox: 22,
		safari: 5.1,
		opera: 18,
		ios_saf: 8,
		android: 4.1
	};

	var Browserchecker = new Browsercheck(featuresJSON, checkVersions);

	//init browser selects
	browserSelects.init(featuresJSON, checkVersions);

	//tooltip
	tooltip.init(checkVersions, resultsUp);

	//init resultsup
	resultsUp.init(codeEditor, tooltip);

	//browser check code on load
	codeEditor.init(checkVersions, Browserchecker, tooltip, resultsUp);

}());