//Results up
var resultsUp = (function(B){
    'use strict';

    var el = _gebi('results-up'),
        lastOpenTabEl,
        lastOpenTabNavEl,
        resultsUp = {};

    resultsUp.init = function(codeEditor){

        var navAnchors = el.getElementsByTagName('nav')[0].getElementsByTagName('a'),
            self = this;

        this.codeEditor = codeEditor;

        //make nav work
        B.forEach(navAnchors, function(anchor){
            if(anchor.nodeType === 1){
                B(anchor).click(function(e){
                    e.preventDefault();
                    self.openTab(anchor.getAttribute('data-tab'));
                });
            }
        });

        // B(window).on('scroll', function(){
        //     var scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        //     if(scrollTop >= (stickyBreakpointY)){
        //         _el.addClass('is-sticky');
        //     } else {
        //         _el.removeClass('is-sticky');
        //     }
        // });

        this.openFirstTab();

    };

    resultsUp.open = function(options){
        var _el = B(el);

        var openResultsUp = function(){
            if(typeof options.beforeVisible === 'function'){
                options.beforeVisible();
            }

            _el.addClass('is-visible');
        };

        if(_el.hasClass('is-visible')){
            _el.removeClass('is-visible');
            setTimeout(openResultsUp, 300);
        } else {
            openResultsUp();
        }
    };

    resultsUp.constructTabs = function(browserCheckResults){
        var self = this;
        B(el).find('ul').each(function(list){
            list.innerHTML = '';

            var status = list.getAttribute('data-tab'),
                statusResults = browserCheckResults[status],
                listItems = document.createDocumentFragment();

            var createItem = function(contents, arrIdx){
                var el = document.createElement('li');
                el.innerText = contents;

                el.setAttribute('data-status', status);
                el.setAttribute('data-idx', arrIdx);

                B(el).click(function(e){
                    e.preventDefault();

                    var el = e.target,
                        anchor = self.codeEditor.getAnchorByStatusAndIdx(el.getAttribute('data-status'), el.getAttribute('data-idx'));

                    self.codeEditor.openTooltipByAnchor(anchor);
                });

                listItems.appendChild(el);
            };

            if(statusResults.length > 0){
                B.forEach(statusResults, function(featureDetails, idx){
                    createItem(featureDetails.title, idx);
                });
            } else {
                createItem('None '+status);
            }

            list.appendChild(listItems);
        });
    };

    resultsUp.openTab = function(tabName){
        var resultsEl = el;

        var getElByTagNameAndAttr = function(tagName, attrName){
            var els = resultsEl.getElementsByTagName(tagName);

            for(var i = 0; i < els.length; i++){
                var el = els[i];
                if(el.nodeType === 1 && el.getAttribute(attrName) === tabName){
                    return el;
                }
            }
        };

        var openTabEl = getElByTagNameAndAttr('ul', 'data-tab'),
            openTabNavEl = getElByTagNameAndAttr('a', 'data-tab');

        B(openTabNavEl).addClass('is-active');
        B(openTabEl).addClass('is-open');

        if(lastOpenTabEl){
            B(lastOpenTabEl).removeClass('is-open');
        }

        if(lastOpenTabNavEl){
            B(lastOpenTabNavEl).removeClass('is-active');
        }

        lastOpenTabEl = openTabEl;
        lastOpenTabNavEl = openTabNavEl;
    };

    resultsUp.openFirstTab = function(){
        this.openTab(el.getElementsByTagName('ul')[0].getAttribute('data-tab'));
    };

    return resultsUp;
}(B));