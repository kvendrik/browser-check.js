var tooltip = (function(){
    'use strict';

    var tooltip = {};

    tooltip.init = function(checkVersions, tooltipEl){
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

    tooltip.changeTooltipToFeature = function(featureDetails){
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

    tooltip.tooltipChangeState = function(options){

        var toState = options.action,
            featureDetails = options.featureDetails,
            newY = options.newY;

        var tooltipEl = this.tooltip.el,
            _el = B(tooltipEl),
            self = this,
            showTooltip = function(){
                self.changeTooltipToFeature(featureDetails);
                if(newY) tooltipEl.setAttribute('style', 'top:'+(newY)+'px;');
                _el.addClass('is-visible');
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

}());

