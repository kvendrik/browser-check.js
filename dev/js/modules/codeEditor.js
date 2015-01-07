var codeEditor = (function(B, Prism){
    'use strict';

    var codeInput = _gebi('code-input'),
        codeEditor = {};

    codeEditor.init = function(checkVersions, Browsercheck, tooltip, resultsUp){
        this.checkVersions = checkVersions;
        this.Browsercheck = Browsercheck;
        this.tooltip = tooltip;
        this.resultsUp = resultsUp;

        this.initCheckTrigger();
    };

    codeEditor.initCheckTrigger = function(){
        //get el
        var _checkTrigger = B(_gebi('check-trigger')),
            codeWrapperOffset = document.getElementsByClassName('code-wrapper')[0].offsetTop,
            self = this;

        //append listener
        _checkTrigger.click(function(e){
            e.preventDefault();
            Prism.highlightElement(codeInput);
            self.browserCheckCode();
        });

        //make sticky when in editor
        B(window).on('scroll', function(){
            var offsetTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            
            if(offsetTop > codeWrapperOffset){
                _checkTrigger.addClass('is-sticky');
            } else {
                _checkTrigger.removeClass('is-sticky');
            }
        });
    };

    codeEditor.browserCheckCode = function(){
        var results = this.browserCheckResults = this.Browsercheck.check(codeInput.innerText),
            parsedHtml = this.parseResultsInJsCode(results, codeInput.innerHTML),
            self = this;

        //replace code with new html
        codeInput.innerHTML = parsedHtml;

        //hide tooltip
        this.tooltip.tooltipChangeState({
            action: 'hide'
        });

        //add listeners to tooltip anchors
        this.addListenersToTooltipAnchors();

        //open results
        this.resultsUp.open({
            beforeVisible: function(){
                self.resultsUp.constructTabs(results);
            }
        });
    };

    codeEditor.addListenersToTooltipAnchors = function(){
        var self = this;

        B.forEach(codeInput.getElementsByClassName('tooltip-trigger'), function(el){
            if(el.nodeType === 1){
                B(el).click(function(e){
                    e.preventDefault();
                    self.openTooltipByAnchor(el);
                });
            }
        });
    };

    codeEditor.openTooltipByAnchor = function(anchorEl){
        var featureDetails = this.browserCheckResults[anchorEl.getAttribute('data-status')][anchorEl.getAttribute('data-idx')];

        B(anchorEl).addClass('is-active');
        if(self.prevAnchorEl){
            B(self.prevAnchorEl).removeClass('is-active');
        }
        self.prevAnchorEl = anchorEl;

        this.tooltip.tooltipChangeState({
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

        var regexTokenTag = '(\<[\w\s\/\>]+([^c]+)?class\=\"token[^\"]+\"[\<\w\s\/\>]+)?';

        B.forEach(checkResults, function(features, status){
            B.forEach(features, function(featureDetails, idx){

                //check if trigger consists of 2 words
                var triggerParts = featureDetails.foundTrigger.split(' '),
                    trigger,
                    regex;

                if(triggerParts.length === 2){
                    trigger = triggerParts[0]+regexTokenTag+triggerParts[1];
                } else {
                    trigger = featureDetails.foundTrigger;
                }

                regex = new RegExp('\('+regexTokenTag+trigger+'(\<\/span\>)?\)'+regexTokenTag+'[\'\"\(\s]\<\/span\>', 'g');

                jsCode = jsCode.replace(regex, function(match, captureHtml){
                    var wrappedHtml = captureHtml,
                        prependSpan = false,
                        prependSpace = false;

                    //check for span close at beginning of str
                    if(wrappedHtml[1] === '/'){
                        wrappedHtml = captureHtml.replace('</span>', '');
                        prependSpan = true;
                    }

                    //check for prepended spaces
                    if(wrappedHtml[0] === ' '){
                        wrappedHtml = wrappedHtml.trim();
                        prependSpace = true;
                    }

                    wrappedHtml = (prependSpan ? '</span>' : '')+(prependSpace ? ' ' : '')+'<a class="tooltip-trigger '+status+'" data-status="'+status+'" data-idx="'+idx+'">'+wrappedHtml+'</a>';

                    return match.replace(captureHtml, wrappedHtml);
                });

            });
        });

        return jsCode;
    };

    return codeEditor;

}(B, Prism));