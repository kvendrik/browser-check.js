var tooltip = (function(Velocity){
    'use strict';

    var el = _gebi('tooltip'),
        tooltip = {};

    tooltip.init = function(checkVersions){
        this.checkVersions = checkVersions;
    };

    tooltip.changeTooltipToFeature = function(featureDetails){
        var _el = B(el),
            childs = {
                explaination: el.getElementsByTagName('header')[0],
                description: el.getElementsByClassName('description')[0],
                supportOverview: el.getElementsByClassName('support-overview')[0],
                overviewLink: el.getElementsByClassName('overview-link')[0]
            };

        _el.removeClass('passed');
        _el.removeClass('failed');
        _el.addClass(featureDetails.status);

        childs.explaination.innerText = featureDetails.explaination;
        childs.description.innerText = featureDetails.description;
        childs.supportOverview.innerHTML = '';
        childs.supportOverview.appendChild(this.constructSupportOverview(featureDetails.stats));
        childs.overviewLink.setAttribute('href', 'http://caniuse.com/#search='+featureDetails.title);
    };

    tooltip.tooltipChangeState = function(options){

        var toState = options.action,
            featureDetails = options.featureDetails,
            newY = options.newY;

        var _el = B(el),
            self = this,
            showTooltip = function(){
                self.changeTooltipToFeature(featureDetails);
                if(newY) el.setAttribute('style', 'top:'+(newY)+'px;');
                _el.addClass('is-visible');
                Velocity(el, "scroll", { duration: 300, offset: -100 });
            };

        switch(toState){
            case 'show':
                if(_el.hasClass('is-visible')){
                    this.tooltipChangeState({
                        action: 'hide'
                    });
                    setTimeout(showTooltip, 300);
                } else {
                    showTooltip();
                }
            break;

            case 'hide':
                _el.removeClass('is-visible');
            break;
        }

    };

    tooltip.constructSupportOverview = function(browsersJson){

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

    return tooltip;

}(Velocity));

