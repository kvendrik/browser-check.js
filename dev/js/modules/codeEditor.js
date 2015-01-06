var codeEditor = (function(){
    'use strict';

    var codeInput = _gebi('code-input'),
        codeEditor = {};

    codeEditor.init = function(checkVersions, Browsercheck, tooltip, resultsUp){
        this.checkVersions = checkVersions;
        this.Browsercheck = Browsercheck;
        this.tooltip = tooltip;
        this.resultsUp = resultsUp;
    };

    codeEditor.browserCheckCode = function(){
        var results = this.browserCheckResults = this.Browsercheck.check(codeInput.innerText),
            parsedHtml = this.parseResultsInJsCode(results, codeInput.innerText),
            self = this,
            resultsUp = this.resultsUp;

        //replace code with new html
        codeInput.innerHTML = parsedHtml;

        //hide tooltip
        this.tooltip.tooltipChangeState({
            action: 'hide'
        });

        //add listeners to tooltip anchors
        this.addListenersToTooltipAnchors();

        //open results
        resultsUp.open({
            beforeVisible: function(){
                resultsUp.constructTabs(results);
            }
        });
    };

    codeEditor.addListenersToTooltipAnchors = function(){
        var self = this,
            anchorOnClick = function(e){
                e.preventDefault();
                var el = e.target;
                self.openTooltipByAnchor(el);
            };

        B.forEach(codeInput.getElementsByClassName('tooltip-trigger'), function(el){
            if(el.nodeType === 1){
                B(el).click(anchorOnClick);
            }
        });
    };

    codeEditor.openTooltipByAnchor = function(anchorEl){
        var featureDetails = this.browserCheckResults[anchorEl.getAttribute('data-status')][anchorEl.getAttribute('data-idx')];
        self.tooltip.tooltipChangeState({
            action: 'show',
            featureDetails: featureDetails,
            newY: anchorEl.offsetTop
        });
    };

    codeEditor.getAnchorByStatusAndIdx = function(status, idx){
        var anchors = codeInput.getElementsByClassName('tooltip-trigger');

        for(var i = 0; i < anchors.length; i++){
            var el = anchors[i];
            if(el.nodeType === 1){
                if(el.getAttribute('data-status') === status && el.getAttribute('data-idx') === idx){
                    return el;
                }
            }
        }

        return null;
    };

    codeEditor.parseResultsInJsCode = function(checkResults, jsCode){
        this.checkResults = checkResults;

        B.forEach(checkResults, function(features, status){
            B.forEach(features, function(featureDetails, idx){

                jsCode = jsCode.replace(new RegExp(featureDetails.foundTrigger+'([\'\"\(\s])', 'g'), function(match, nextChar){
                    return '<a class="tooltip-trigger '+status+'" data-status="'+status+'" data-idx="'+idx+'">'+featureDetails.foundTrigger+'</a>'+nextChar;
                });

            });
        });

        return jsCode;
    };

    return codeEditor;

}());