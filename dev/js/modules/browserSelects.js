//add the selects
var browserSelects = (function(B){
    'use strict';

    var browserSelects = {};

    browserSelects.init = function(featuresJSON, checkVersions){

        this.checkVersions = checkVersions;

        //construct the selects
        var selects = this.constructBrowserSelects(featuresJSON[0].stats);

        //add selects to DOM
        _gebi('selects-wrapper').appendChild(selects);

    };

    browserSelects.constructBrowserSelects = function(browsersJson){

        var frag = document.createDocumentFragment();

        //loop browsers, construct select
        B.forEach(this.checkVersions[0], function(defaultVersion, browserName){
            var el = browserSelects.constructSelect(defaultVersion, browserName, browsersJson);
            frag.appendChild(el);
        });

        return frag;

    };

    browserSelects.constructSelect = function(defaultVersion, browserName, browsersJson){
        var frag = document.createDocumentFragment(),
            select = document.createElement('select'),
            icon,
            self = this;

        var onSelectChange = function(e){
            var options = this.getElementsByTagName('option');

            B.forEach(options, function(option){
                if(option.selected){
                    self.checkVersions.set(option.getAttribute('data-browser-name'), Number(option.getAttribute('data-browser-version')));
                }
            });
        };

        if(typeof onSelectChange === 'function'){
            B(select).on('change', onSelectChange);
        }

        //add option for each browser version
        B.forEach(browsersJson[browserName], function(support, version){
            if(isNaN(version)) return;
            var optionEl = self.constructVersionOption(version.match(/[\d\.]+/)[0], defaultVersion, browserName);
            select.appendChild(optionEl);
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

}(B));