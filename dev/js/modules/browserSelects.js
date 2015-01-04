//add the selects
var browserSelects = (function(){
    'use strict';

    var browserSelects = {};

    browserSelects.init = function(featuresJSON, checkVersions){

        //construct the selects
        var selects = this.constructBrowserSelects(featuresJSON[0].stats, checkVersions);

        //add selects to DOM
        _gebi('selects-wrapper').appendChild(selects);

    };

    browserSelects.constructBrowserSelects = function(browsersJson, checkVersions){

        var frag = document.createDocumentFragment();

        //loop browsers, construct select
        B.forEach(checkVersions, function(defaultVersion, browserName){
            frag.appendChild(browserSelects.constructSelect(defaultVersion, browserName, browsersJson));
        });

        return frag;

    };

    browserSelects.constructSelect = function(defaultVersion, browserName, browsersJson){
        var frag = document.createDocumentFragment(),
            select = document.createElement('select'),
            icon;

        var onSelectChange = function(e){
            var options = this.getElementsByTagName('option');

            B.forEach(options, function(option){
                if(option.selected){
                    checkVersions.set(option.getAttribute('data-browser-name'), Number(option.getAttribute('data-browser-version')));
                }
            });
        };

        if(typeof onSelectChange === 'function'){
            B(select).on('change', onSelectChange);
        }

        //add option for each browser version
        B.forEach(browsersJson[browserName], function(support, version){
            if(isNaN(version)) return;
            select.appendChild(browserSelects.constructVersionOption(version.match(/[\d\.]+/)[0], defaultVersion, browserName));
        });

        //add select to frag
        frag.appendChild(select);

        //create icon, append to frag
        icon = document.createElement('span');
        icon.className = 'ss-icon ss-standard';
        icon.innerText = 'navigatedown';
        frag.appendChild(icon);

        return frag;
    };

    browserSelects.constructVersionOption = function(version, defaultVersion, browserName){
        var option;

        //construct options
        option = document.createElement('option');

        option.setAttribute('data-browser-name', browserName);
        option.setAttribute('data-browser-version', version);
        option.innerText = browserName+' '+version+'+';

        //check if browser version is default
        if(Number(version) === defaultVersion){
            option.setAttribute('selected', '');
        }

        return option;
    };

    return browserSelects;

}());