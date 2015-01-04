var codeEditor = (function(){
    'use strict';

    var codeInput = _gebi('code-input');

    var codeEditor = {};

    codeEditor.init = function(checkVersions){
        this.checkVersions = checkVersions;
    };

    codeEditor.browserCheckCode = function(codeInput){
        var results = Browsercheck.check(codeInput.innerText),
            parsedHtml = UI.parseResultsInJsCode(results, codeInput.innerText);

        codeInput.innerHTML = parsedHtml;

        UI.tooltipChangeState({
            action: 'hide'
        });

        B.forEach(codeInput.getElementsByClassName('tooltip-trigger'), function(el){
            if(el.nodeType === 1){
                var _el = B(el);

                if(!_el.hasClass('tooltip-trigger')) return;

                _el.click(function(e){
                    e.preventDefault();

                    var el = e.target;

                    var featureDetails = results[el.getAttribute('data-status')][el.getAttribute('data-idx')];
                    UI.tooltipChangeState({
                        action: 'show',
                        featureDetails: featureDetails,
                        newY: el.offsetTop
                    });
                });
            }
        });

        resultsUp.constructTabs(results);
        resultsUp.open();
    };

    codeEditor.parseResultsInJsCode = function(checkResults, jsCode){
        this.checkResults = checkResults;

        B.forEach(checkResults, function(features, status){
            B.forEach(features, function(featureDetails, idx){

                jsCode = jsCode.replace(featureDetails.foundTrigger, '<a class="tooltip-trigger '+status+'" data-status="'+status+'" data-idx="'+idx+'">'+featureDetails.foundTrigger+'</a>');

            });
        });

        return jsCode;
    };

    return codeEditor;

}());