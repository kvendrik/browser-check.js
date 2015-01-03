(function(){
'use strict';

var UI = function(checkVersions, tooltipEl){
    this.checkVersions = checkVersions;
    this.tooltip = {
        el: tooltipEl,
        childs: {
            explaination: tooltipEl.getElementsByTagName('header')[0],
            description: tooltipEl.getElementsByClassName('description')[0],
            supportOverview: tooltipEl.getElementsByClassName('support-overview')[0],
            overviewLink: tooltipEl.getElementsByClassName('overview-link')[0]
        }
    };
};

UI.prototype.getCheckResults = function(){
    return this.checkResults;
};

UI.prototype.constructBrowserSelects = function(browsersJson, onSelectChange){

    var frag = document.createDocumentFragment(),
        checkVersions = this.checkVersions,

    constructBrowserSelect = function(defaultVersion, browserName){
        var select = document.createElement('select'),
            icon;

        if(typeof onSelectChange === 'function'){
            B(select).on('change', onSelectChange);
        }

        //add option for each browser version
        B.forEach(browsersJson[browserName], function(support, version){
            if(isNaN(version)) return;
            select.appendChild(constructVersionOption(version.match(/[\d\.]+/)[0], defaultVersion, browserName));
        });

        //add select to frag
        frag.appendChild(select);

        //create icon, append to frag
        icon = document.createElement('span');
        icon.className = 'ss-icon ss-standard';
        icon.innerText = 'navigatedown';
        frag.appendChild(icon);
    },

    constructVersionOption = function(version, defaultVersion, browserName){
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

    //loop browsers, construct select
    B.forEach(checkVersions, constructBrowserSelect);

    return frag;
};

UI.prototype.changeTooltipToFeature = function(featureDetails){
    var tooltip = this.tooltip;

    var _el = B(tooltip.el);
    _el.removeClass('passed');
    _el.removeClass('failed');
    _el.addClass(featureDetails.status);

    tooltip.childs.explaination.innerText = featureDetails.explaination;
    tooltip.childs.description.innerText = featureDetails.description;
    tooltip.childs.supportOverview.innerHTML = '';
    tooltip.childs.supportOverview.appendChild(this.constructSupportOverview(featureDetails.stats));
    tooltip.childs.overviewLink.setAttribute('href', 'http://caniuse.com/#search='+featureDetails.title);
};

UI.prototype.tooltipChangeState = function(toState, featureDetails, newY){

    var tooltipEl = this.tooltip.el,
        _el = B(tooltipEl),
        self = this,
        showTooltip = function(){
            self.changeTooltipToFeature(featureDetails);
            tooltipEl.setAttribute('style', 'top:'+(newY || 0)+'px;');
            _el.addClass('visible');
        };

    switch(toState){
        case 'show':
            if(_el.hasClass('visible')){
                this.tooltipChangeState('hide', null, null);
                setTimeout(showTooltip, 300);
            } else {
                showTooltip();
            }
        break;

        case 'hide':
            _el.removeClass('visible');
        break;
    }

};

UI.prototype.constructSupportOverview = function(browsersJson){

    var checkVersions = this.checkVersions;

    //create fragment to hold uls
    var frag = document.createElement('div');

    //loop browsers
    for(var browserName in browsersJson){
        if(browsersJson.hasOwnProperty(browserName)){

            //create wrapper
            var wrapper = document.createElement('ul');

            //check if we need to check this browser
            if(!checkVersions[browserName]) continue;

            //create first li with browser name
            var title = document.createElement('li');
            title.innerText = browserName;
            wrapper.appendChild(title);

            //loop versions
            (function(){
                var versions = browsersJson[browserName],
                    //max number of versions to display
                    maxItems = 5,
                    itemCount = 0;

                for(var version in versions){
                    if(versions.hasOwnProperty(version)){

                        //check if maxitems reached
                        if(itemCount >= maxItems) break;

                        //check if version is valid number
                        //and theirfor parse-able
                        var isNum = !isNaN(version);
                        if(!isNum) continue;

                        //check if we need to check this version
                        if(Number(version) >= checkVersions[browserName]){

                            var support = versions[version];

                            var versionItem = document.createElement('li');
                            versionItem.innerText = version;
                            versionItem.className = support;
                            wrapper.appendChild(versionItem);

                            itemCount++;
                        }

                    }
                }
            }());

            //add done ul to fragment
            frag.appendChild(wrapper);

        }
    }

    return frag;

};

UI.prototype.parseResultsInJsCode = function(checkResults, jsCode){

    this.checkResults = checkResults;

    B.forEach(checkResults, function(features, status){
        B.forEach(features, function(featureDetails, idx){

            jsCode = jsCode.replace(featureDetails.foundTrigger, '<a class="tooltip-trigger '+status+'" data-status="'+status+'" data-idx="'+idx+'">'+featureDetails.foundTrigger+'</a>');

        });
    });

    return jsCode;
};

window.UI = UI;

}());

