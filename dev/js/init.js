var _gebi = function(id){
	return document.getElementById(id);
};

(function(UI, Browsercheck){
	'use strict';

	//versions to check if support is higher than
	var checkVersions = new Observer({
		ie: 10,
		chrome: 16,
		firefox: 22,
		safari: 5.1,
		opera: 18,
		ios_saf: 8,
		android: 4.1
	});

	//create shorthands
	var tooltipEl = _gebi('tooltip');

	//construct new instance of classes
	//classes only read from checkVersions
	//which is why passing only the raw object is okay
	UI = new UI(checkVersions[0], tooltipEl);
	Browsercheck = new Browsercheck(featuresJSON, checkVersions[0]);

	//listen for checkVersions changes
	checkVersions.on('change', function(details){
		codeEditor.browserCheckCode(codeInput);
	});

	//init browser selects
	browserSelects.init(featuresJSON, checkVersions[0]);

	//init resultsup
	resultsUp.init(checkVersions);

	//browser check code on load
	codeEditor.init();
	codeEditor.browserCheckCode();

}(window.UI, window.Browsercheck));