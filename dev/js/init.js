function _gebi(id){
	return document.getElementById(id);
};

(function(){
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

	Browsercheck = new Browsercheck(featuresJSON, checkVersions[0]);

	//listen for checkVersions changes
	checkVersions.on('change', function(details){
		codeEditor.browserCheckCode();
	});

	//init browser selects
	browserSelects.init(featuresJSON, checkVersions);

	//tooltip
	tooltip.init(checkVersions[0]);

	//init resultsup
	resultsUp.init(document.getElementsByClassName('code-wrapper')[0].offsetTop);

	//browser check code on load
	codeEditor.init(checkVersions[0]);
	codeEditor.browserCheckCode();

}());