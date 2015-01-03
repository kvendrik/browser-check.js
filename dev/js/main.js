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
	var _gebi = function(id){
		return document.getElementById(id);
	};

	//construct new instance of classes
	//classes only read from checkVersions
	//which is why passing only the raw object is okay
	UI = new UI(checkVersions[0], _gebi('tooltip'));
	Browsercheck = new Browsercheck(featuresJSON, checkVersions[0]);

	var browserCheckCode = function(jsCode){
		var results = Browsercheck.check(codeInput.innerText),
			parsedHtml = UI.parseResultsInJsCode(results, codeInput.innerText);

		codeInput.innerHTML = parsedHtml;

		B.forEach(codeInput.getElementsByClassName('tooltip-trigger'), function(el){
			if(el.nodeType === 1){
				var _el = B(el);

				if(!_el.hasClass('tooltip-trigger')) return;

				_el.click(function(e){
					e.preventDefault();

					var el = e.target,
						featureDetails = UI.getCheckResults()[el.getAttribute('data-status')][el.getAttribute('data-idx')];

					UI.tooltipChangeState('show', featureDetails, el.offsetTop);
				});
			}
		});
	};

	//get code input
	var codeInput = _gebi('code-input');

	//listen for checkVersions changes
	checkVersions.on('change', function(details){
		browserCheckCode(codeInput.innerText);
	});

	//add the selects
	(function(){
		var onSelectChange = function(e){
	    	var options = this.getElementsByTagName('option');

	    	B.forEach(options, function(option){
	    		if(option.selected){
	    			checkVersions.set(option.getAttribute('data-browser-name'), Number(option.getAttribute('data-browser-version')));
	    		}
	    	});
	    };

		//construct the selects
		var selects = UI.constructBrowserSelects(featuresJSON[0].stats, onSelectChange);

		//add selects to DOM
		_gebi('selects-wrapper').appendChild(selects);
	}());

	//browser check code on load
	browserCheckCode(codeInput.innerText);

}(window.UI, window.Browsercheck));