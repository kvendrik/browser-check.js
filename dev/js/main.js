(function(){
	'use strict';

	var UI = new UI();

	//add the selects
	(function(){
		var selectsWrapper = document.getElementById('selects-wrapper'), //get element that wraps the browser selects
		    selects = UI.constructBrowserSelects(JSONDetails[0].stats); //construct the selects

		//add selects to DOM
		selectsWrapper.appendChild(selects);
	}());

	//contruct a tooltip
	(function(){

    	UI.constructTooltip(JSONDetails[0], document.getElementById('tooltip'));
	
	}());

}());