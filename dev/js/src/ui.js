(function(){
'use strict';

var UI = function(){

    this.checkVersions = {
        ie: 9,
        chrome: 16,
        firefox: 22,
        safari: 5.1,
        opera: 18,
        ios_saf: 8,
        android: 4.1
    };

};

UI.prototype.constructBrowserSelects = function(browsersJson){

    var frag = document.createDocumentFragment(),
        checkVersions = this.checkVersions,
        select,
        option,
        icon,

    constructBrowserSelect = function(defaultVersion, browserName){
        select = document.createElement('select');

        //add option for each browser version
        B.forEach(browsersJson[browserName], constructVersionOption);

        //add select to frag
        frag.appendChild(select);

        //create icon, append to frag
        icon = document.createElement('span');
        icon.className = 'ss-icon ss-standard';
        icon.innerText = 'navigatedown';
        frag.appendChild(icon);
    },

    constructVersionOption = function(support, version){
        //construct options
        option = document.createElement('option'),
        firstLetter = browserName.charAt(0);
        option.innerText = browserName.replace(firstLetter, firstLetter.toUpperCase())+' '+version+'+';

        //check if browser version is default
        console.log(version == defaultVersion);
        if(version == defaultVersion){
            option.setAttribute('checked', '');
        }
        select.appendChild(option);
    };

    //loop browsers, construct select
    B.forEach(checkVersions, constructBrowserSelect);

    return frag;
};

UI.prototype.constructTooltip = function(detailsJson, tooltipEl){

    //get support overview
    var supportOverview = constructor.constructSupportOverview.call(this, detailsJson.stats);

    //render template
    Mustache.render(tooltipEl.innerHTML, {
        description: detailsJson.description
        supportOverview: supportOverview
    });

};

UI.prototype.constructTooltip.constructSupportOverview = function(browsersJson){

    var checkVersions = this.checkVersions;

    //create fragment to hold uls
    var frag = document.createDocumentFragment();

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

}());

