//Results up
var resultsUp = (function(){
    'use strict';

    var el = document.getElementsByClassName('results-up')[0],
        navAnchors = el.getElementsByTagName('nav')[0].getElementsByTagName('a'),
        lastOpenTabEl,
        lastOpenTabNavEl;

    var resultsUp = {};

    resultsUp.init = function(){
        //make nav work
        B.forEach(navAnchors, function(anchor){
            if(anchor.nodeType === 1){
                B(anchor).click(function(){
                    resultsUp.openTab(anchor.getAttribute('data-tab'));
                });
            }
        });
    };

    resultsUp.open = function(){
        var openResultsUp = function(){
            _el.addClass('is-visible');
        };

        var _el = B(el);
        if(_el.hasClass('is-visible')){
            _el.removeClass('is-visible');
            setTimeout(openResultsUp, 300);
        } else {
            openResultsUp();
        }
    };

    resultsUp.constructTabs = function(browserCheckResults){
        B(el).find('ul').each(function(list){
            list.innerHTML = '';

            var status = list.getAttribute('data-tab'),
                statusResults = browserCheckResults[status],
                listItems = document.createDocumentFragment();

            var createItem = function(contents){
                var el = document.createElement('li');
                el.innerText = contents;
                listItems.appendChild(el);
            };

            if(statusResults.length > 0){
                B.forEach(statusResults, function(featureDetails){
                    createItem(featureDetails.title);
                });
            } else {
                createItem('None '+status);
            }

            list.appendChild(listItems);
        });
    };

    resultsUp.openTab = function(tabName){
        var getElByTagNameAndAttr = function(tagName, attrName){
            var els = el.getElementsByTagName(tagName);

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
}());