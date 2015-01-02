!function(a,b,c){"use strict";var d=function(a,b,d){d||d===c?e.prototype[a]=b:e[a]=b},e=function(d){if(this===a||this===c)return new e(d);var f=typeof d;if("object"===f)if(d[1]&&1===d[1].nodeType)for(var g=0,h=d.length;h>g;g++)this[g]=d[g];else this[0]=d;else"string"===f&&this._selector(d,b);return this};d("_selector",function(a,c){if(0===a.indexOf("#"))this[0]=b.getElementById(a.replace("#",""));else for(var d=0===a.indexOf(".")?c.getElementsByClassName(a.replace(".","")):/^[a-zA-Z]+$/.test(a)?c.getElementsByTagName(a):c.querySelectorAll(a),e=0,f=d.length;f>e;e++)this[e]=d[e]}),d("ajax",function(a){var b=new XMLHttpRequest,d=a.data,e=a.dataType;b.onreadystatechange=function(){if(4===b.readyState&&200===b.status){var c,d=b.responseText;if("json"===e)try{c=JSON.parse(d)}catch(f){c=d}else c=d;"function"==typeof a.success&&a.success(c,b)}};var f=a.type!==c?a.type.toUpperCase():"GET",g=["POST","PUT","DELETE"];b.open(f,a.url,!0),-1!==g.indexOf(f)&&("json"===e?b.setRequestHeader("Content-Type","application/json; charset=UTF-8"):b.setRequestHeader("Content-Type","application/x-www-form-urlencoded")),"json"!==e||"object"!=typeof d||Array.isArray(d)||(d=JSON.stringify(d)),b.send(d)},!1),d("getJSON",function(a,b){return e.ajax({dataType:"json",url:a,success:b})},!1),"object"==typeof b.documentElement.classList?(d("hasClass",function(a){return this[0].classList.contains(a)!==!1?this:!1}),d("addClass",function(a){return this[0].classList.add(a),this}),d("removeClass",function(a){return this[0].classList.remove(a),this}),d("toggleClass",function(a){return this[0].classList.toggle(a),this})):(d("_ClassesBase",function(a,b,c){var d=a.className.split(" ");if(c)d.push(b);else{var e=d.indexOf(b);-1!==e&&d.splice(e,1)}a.className=d.join(" ")}),d("hasClass",function(a){return-1!==this[0].className.split(" ").indexOf(a)?this:!1}),d("addClass",function(a){return this.hasClass(a)||this._ClassesBase(this[0],a,!0),this}),d("removeClass",function(a){return this.hasClass(a)&&this._ClassesBase(this[0],a,!1),this}),d("toggleClass",function(a){return this.hasClass(a)?this.removeClass(a):this.addClass(a),this})),"function"==typeof a.FastButton?d("click",function(a){return new FastButton(this[0],a),this}):d("click",function(a){return this.on("click",a),this}),d("resizeEnd",function(a){return this.on("resize",function(){typeof this.resizeEndTimeout!==c&&clearTimeout(this.resizeEndTimeout),this.resizeEndTimeout=setTimeout(a,200)}),this}),d("each",function(a){for(var b in this)1===this[b].nodeType&&a(this[b]);return this}),d("on",function(a,b){return this[0].addEventListener(a,b,!1),this}),d("off",function(a,b){return this[0].removeEventListener(a,b,!1),this}),d("extend",function(){for(var a=arguments,b=1,c=a.length;c>b;b++)for(var d in a[b])a[b].hasOwnProperty(d)&&(a[0][d]=a[b][d]);return a[0]},!1),d("find",function(a){return this._selector(a,this[0]),this}),d("forEach",function(a,b){if(Array.isArray(a))a.forEach(b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&b(a[c],c,a);return this},!1),d("serialize",function(){var a,b=this[0],c=b.getElementsByTagName("input"),d=b.getElementsByTagName("textarea"),e="";for(a=c.length-1;a>=0;a--){var f=c[a],g=f.getAttribute("type");"radio"===g||"checkbox"===g?f.checked===!0&&(e+=f.name+"="+f.value+"&"):e+=f.name+"="+f.value+"&"}for(a=d.length-1;a>=0;a--){var h=d[a];e+=h.name+"="+h.value+"&"}return e=e.slice(0,-1)}),d("setInterval",function(a,b){var c=this;return setTimeout(function(){a(),c.setInterval(a,b,!0)},b)},!1);var f=e;f.fn=e.prototype,a.B=f}(this,this.document);
(function(){
'use strict';

var JSONDetails = [{"title":"JSON parsing","description":"Method of converting JavaScript objects to JSON strings and JSON back to objects using JSON.stringify() and JSON.parse()","spec":"http://es5.github.com/#x15.12","status":"other","links":[{"url":"https://developer.mozilla.org/En/Using_native_JSON","title":"MDN article"},{"url":"http://www.json.org/js.html","title":"JSON in JS (includes script w/support)"},{"url":"https://raw.github.com/phiggins42/has.js/master/detect/json.js#json","title":"has.js test"},{"url":"http://docs.webplatform.org/wiki/apis/json","title":"WebPlatform Docs"}],"bugs":[],"categories":["JS API"],"stats":{"ie":{"5.5":"n","6":"n","7":"n","8":"y","9":"y","10":"y","11":"y"},"firefox":{"2":"n","3":"n","3.5":"y","3.6":"y","4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y"},"chrome":{"4":"y","5":"y","6":"y","7":"y","8":"y","9":"y","10":"y","11":"y","12":"y","13":"y","14":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y","28":"y","29":"y","30":"y","31":"y","32":"y","33":"y","34":"y","35":"y","36":"y","37":"y","38":"y","39":"y","40":"y","41":"y","42":"y"},"safari":{"3.1":"n","3.2":"n","4":"y","5":"y","5.1":"y","6":"y","6.1":"y","7":"y","7.1":"y","8":"y"},"opera":{"9":"n","9.5-9.6":"n","10.0-10.1":"n","10.5":"y","10.6":"y","11":"y","11.1":"y","11.5":"y","11.6":"y","12":"y","12.1":"y","15":"y","16":"y","17":"y","18":"y","19":"y","20":"y","21":"y","22":"y","23":"y","24":"y","25":"y","26":"y","27":"y"},"ios_saf":{"3.2":"n","4.0-4.1":"y","4.2-4.3":"y","5.0-5.1":"y","6.0-6.1":"y","7.0-7.1":"y","8":"y","8.1":"y"},"op_mini":{"5.0-8.0":"y"},"android":{"2.1":"y","2.2":"y","2.3":"y","3":"y","4":"y","4.1":"y","4.2-4.3":"y","4.4":"y","4.4.3-4.4.4":"y","37":"y"},"bb":{"7":"y","10":"y"},"op_mob":{"10":"y","11":"y","11.1":"y","11.5":"y","12":"y","12.1":"y","24":"y"},"and_chr":{"39":"y"},"and_ff":{"33":"y"},"ie_mob":{"10":"y","11":"y"},"and_uc":{"9.9":"y"}},"notes":"Requires document to be in IE8+ [standards mode](http://msdn.microsoft.com/en-us/library/cc288325%28VS.85%29.aspx) to work in IE8.","notes_by_num":{},"usage_perc_y":96.58,"usage_perc_a":0,"ucprefix":false,"parent":"","keywords":"","ie_id":"","chrome_id":"","shown":true}];

var UI = function(){

    this.tooltip = {
        el: document.getElementById('tooltip'),
        childs: {
            header: tooltip.getElementsByTagName('header')[0],
            description: tooltip.getElementsByClassName('description')[0],
            supportOverview: tooltip.getElementsByClassName('support-overview')[0]
        }
    };

    this.checkVersions = {
        ie: 9,
        chrome: 16,
        firefox: 22,
        safari: 5.1,
        opera: 18,
        ios_saf: 8,
        android: 4.1
    };

    this.addVersionOptions(JSONDetails[0].stats);

    this.constructTooltip(JSONDetails[0]);

};

UI.prototype.addVersionOptions = function(browsersJson){

    var wrapper = document.getElementById('selects-wrapper'),
        //frag to store selects in
        frag = document.createDocumentFragment(),
        checkVersions = this.checkVersions;

    //loop browsers, construct select
    B.forEach(checkVersions, function(defaultVersion, browserName){

        var select = document.createElement('select');

        //loop browser versions
        B.forEach(browsersJson[browserName], function(support, version){

            //construct options
            var option = document.createElement('option'),
                firstLetter = browserName.charAt(0);
            option.innerText = browserName.replace(firstLetter,firstLetter.toUpperCase())+' '+version+'+';

            //check if browser version is default
            console.log(version == defaultVersion);
            if(version == defaultVersion){
                option.setAttribute('checked', '');
            }
            select.appendChild(option);

        });

        //add select to frag
        frag.appendChild(select);

        //create icon, append to frag
        var icon = document.createElement('span');
        icon.className = 'ss-icon ss-standard';
        icon.innerText = 'navigatedown';
        frag.appendChild(icon);

    });

    //append frag to wrapper
    wrapper.appendChild(frag);

};

UI.prototype.constructTooltip = function(detailsJson){

    var childs = this.tooltip.childs,
        constructor = this.constructTooltip;

    //get and add support overview to DOM
    var supportOverview = constructor.constructOverview.call(this, detailsJson.stats);
    childs.supportOverview.appendChild(supportOverview);

    //add description to DOM
    childs.description.innerText = detailsJson.description;

};

UI.prototype.constructTooltip.constructOverview = function(browsersJson){

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

new UI();

}());

