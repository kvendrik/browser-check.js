//From https://github.com/Fyrd/caniuse/tree/master/features-json.
//All JS features from 1 to Hashchange

var featuresJSON = [{
  "title":"Ambient Light API",
  "description":"Defines events that provide information about the ambient light level, as measured by a device's light sensor.",
  "spec":"http://www.w3.org/TR/ambient-light/",
  "status":"cr",
  "triggers": ["devicelight"],
  "links":[
    {
      "url":"http://aurelio.audero.it/demo/ambient-light-api-demo.html",
      "title":"Demo"
    },
    {
      "url":"http://modernweb.com/2014/05/27/introduction-to-the-ambient-light-api/",
      "title":"Article"
    }
  ],
  "bugs":[],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"n"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n",
      "29":"n",
      "30":"n",
      "31":"n",
      "32":"n",
      "33":"n",
      "34":"n",
      "35":"n",
      "36":"n",
      "37":"n",
      "38":"n",
      "39":"n",
      "40":"n",
      "41":"n",
      "42":"n"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"n",
      "7":"n",
      "7.1":"n",
      "8":"n"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"n",
      "8":"n",
      "8.1":"n"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"n"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"n"
    },
    "and_chr":{
      "39":"n"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"Firefox desktop supports this API only on Mac OS X. [Support for Windows 7 is in progress](https://bugzilla.mozilla.org/show_bug.cgi?id=754199)",
  "notes_by_num":{},
  "usage_perc_y":11.9,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"",
  "ie_id":"ambientlightevents",
  "chrome_id":"5298357018820608",
  "shown":true
}, {
  "title":"Base64 encoding and decoding",
  "description":"Utility functions for of encoding and decoding strings to and from base 64: window.atob() and window.btoa().",
  "spec":"https://html.spec.whatwg.org/multipage/webappapis.html#atob",
  "status":"ls",
  "triggers": ["btoa", "atob"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa",
      "title":"MDN article on btoa()"
    },
    {
      "url":"https://developer.mozilla.org/en-US/docs/Web/API/Window.atob",
      "title":"MDN article on atob()"
    },
    {
      "url":"https://github.com/davidchambers/Base64.js",
      "title":"Polyfill"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"y",
      "3":"y",
      "3.5":"y",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"y",
      "3.2":"y",
      "4":"y",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"u",
      "10.0-10.1":"u",
      "10.5":"u",
      "10.6":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"y",
      "4.0-4.1":"y",
      "4.2-4.3":"y",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"y"
    },
    "android":{
      "2.1":"y",
      "2.2":"y",
      "2.3":"y",
      "3":"y",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"u",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":91.34,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"atob,btoa",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Web Audio API",
  "description":"High-level JavaScript API for processing and synthesizing audio",
  "spec":"http://www.w3.org/TR/webaudio/",
  "status":"wd",
  "triggers": ["new AudioContext", "new webkitAudioContext"],
  "links":[
    {
      "url":"https://github.com/corbanbrook/audionode.js",
      "title":"Polyfill to support Web Audio API in Firefox"
    },
    {
      "url":"http://docs.webplatform.org/wiki/apis/webaudio",
      "title":"WebPlatform Docs"
    },
    {
      "url":"http://www.doboism.com/projects/webaudio-compatibility/",
      "title":"Additional browser compatibility tests for specific features"
    },
    {
      "url":"https://github.com/g200kg/WAAPISim",
      "title":"Polyfill to enable Web Audio API through Firefox Audio Data api or flash"
    }
  ],
  "bugs":[
    {
      "description":"Chrome for Android does not support the Web Audio API in conjunction with getUserMedia."
    }
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"n"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"y x",
      "11":"y x",
      "12":"y x",
      "13":"y x",
      "14":"y x",
      "15":"y x",
      "16":"y x",
      "17":"y x",
      "18":"y x",
      "19":"y x",
      "20":"y x",
      "21":"y x",
      "22":"y x",
      "23":"y x",
      "24":"y x",
      "25":"y x",
      "26":"y x",
      "27":"y x",
      "28":"y x",
      "29":"y x",
      "30":"y x",
      "31":"y x",
      "32":"y x",
      "33":"y x",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"y x",
      "6.1":"y x",
      "7":"y x",
      "7.1":"y x",
      "8":"y x"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"y x",
      "16":"y x",
      "17":"y x",
      "18":"y x",
      "19":"y x",
      "20":"y x",
      "21":"y x",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"y x",
      "7.0-7.1":"y x",
      "8":"y x",
      "8.1":"y x"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"n"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"Firefox versions < 25 support an alternative, deprecated audio API.\r\n\r\nChrome support [went through some changes](http://updates.html5rocks.com/2014/07/Web-Audio-Changes-in-m36) as of version 36.",
  "notes_by_num":{
    
  },
  "usage_perc_y":66.6,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"web-audio",
  "ie_id":"webaudioapi",
  "chrome_id":"6261718720184320",
  "shown":true
}, {
  "title":"Battery Status API",
  "description":"Method to provide information about the battery status of the hosting device.",
  "spec":"http://www.w3.org/TR/battery-status/",
  "status":"cr",
  "triggers": ["getBattery"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en-US/docs/WebAPI/Battery_Status",
      "title":"MDN Docs"
    },
    {
      "url":"http://www.smartjava.org/examples/webapi-battery/",
      "title":"Simple demo"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"n"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"a x #1",
      "11":"a x #1",
      "12":"a x #1",
      "13":"a x #1",
      "14":"a x #1",
      "15":"a x #1",
      "16":"a #1",
      "17":"a #1",
      "18":"a #1",
      "19":"a #1",
      "20":"a #1",
      "21":"a #1",
      "22":"a #1",
      "23":"a #1",
      "24":"a #1",
      "25":"a #1",
      "26":"a #1",
      "27":"a #1",
      "28":"a #1",
      "29":"a #1",
      "30":"a #1",
      "31":"a #1",
      "32":"a #1",
      "33":"a #1",
      "34":"a #1",
      "35":"a #1",
      "36":"a #1",
      "37":"a #1"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n",
      "29":"n",
      "30":"n",
      "31":"n",
      "32":"n",
      "33":"n",
      "34":"n",
      "35":"n",
      "36":"n",
      "37":"n d",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"n",
      "7":"n",
      "7.1":"n",
      "8":"n"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"n",
      "8":"n",
      "8.1":"n"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"n"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"n"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"a #1"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"a #1"
    }
  },
  "notes":"",
  "notes_by_num":{
    "1":"Partial support refers to support for the older specification's `navigator.battery` rather than `navigator.getBattery()` to access the `BatteryManager`."
  },
  "usage_perc_y":22.46,
  "usage_perc_a":15.28,
  "ucprefix":false,
  "parent":"",
  "keywords":"navigator.battery,navigator.getbattery,batterymanager",
  "ie_id":"batterystatusapi",
  "chrome_id":"4537134732017664",
  "shown":true
}, {
  "title":"Blob constructing",
  "description":"Construct Blobs (binary large objects) either using the BlobBuilder API (deprecated) or the Blob constructor.",
  "spec":"http://www.w3.org/TR/file-writer-api/#the-blobbuilder-interface",
  "status":"wd",
  "triggers": ["new Blob", "new BlobBuilder"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/DOM/BlobBuilder",
      "title":"MDN article on BlobBuilder"
    },
    {
      "url":"https://developer.mozilla.org/en-US/docs/DOM/Blob",
      "title":"MDN article on Blobs"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"a x",
      "7":"a x",
      "8":"a x",
      "9":"a x",
      "10":"a x",
      "11":"a x",
      "12":"a x",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"a x",
      "9":"a x",
      "10":"a x",
      "11":"a x",
      "12":"a x",
      "13":"a x",
      "14":"a x",
      "15":"a x",
      "16":"a x",
      "17":"a x",
      "18":"a x",
      "19":"a x",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"a x",
      "4":"a x",
      "4.1":"a x",
      "4.2-4.3":"a x",
      "4.4":"a x",
      "4.4.3-4.4.4":"a x",
      "37":"y"
    },
    "bb":{
      "7":"n",
      "10":"y"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"a x"
    }
  },
  "notes":"Partial support refers to only supporting the now deprecated BlobBuilder to create blobs.",
  "notes_by_num":{
    
  },
  "usage_perc_y":76.97,
  "usage_perc_a":10.11,
  "ucprefix":true,
  "parent":"fileapi",
  "keywords":"",
  "ie_id":"blob",
  "chrome_id":"5328783104016384",
  "shown":true
}, {
  "title":"Blob URLs",
  "description":"Method of creating URL handles to the specified File or Blob object.",
  "spec":"http://www.w3.org/TR/FileAPI/#url",
  "status":"wd",
  "triggers": ["createObjectURL"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/DOM/window.URL.createObjectURL",
      "title":"MDN article"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"y x",
      "9":"y x",
      "10":"y x",
      "11":"y x",
      "12":"y x",
      "13":"y x",
      "14":"y x",
      "15":"y x",
      "16":"y x",
      "17":"y x",
      "18":"y x",
      "19":"y x",
      "20":"y x",
      "21":"y x",
      "22":"y x",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"y x",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"y x",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"y x",
      "4.1":"y x",
      "4.2-4.3":"y x",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"n",
      "10":"y x"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y x"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":86.44,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"fileapi",
  "keywords":"createobjecturl",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Canvas blend modes",
  "description":"Method of defining the effect resulting from overlaying two layers on a Canvas element. ",
  "spec":"http://www.w3.org/TR/compositing-1/#blending",
  "status":"cr",
  "triggers": ["globalCompositeOperation"],
  "links":[
    {
      "url":"http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/",
      "title":"Blog post"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "Canvas"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"n"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n",
      "29":"n",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"n",
      "16":"n",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":68.47,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"canvas",
  "keywords":"",
  "ie_id":"compositingandblendingincanvas2d",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Text API for Canvas",
  "description":"Method of displaying text on Canvas elements",
  "spec":"https://html.spec.whatwg.org/multipage/scripting.html#drawing-text-to-the-bitmap",
  "status":"ls",
  "triggers": ["fillText", "measureText", "mozDrawText", "mozMeasureText", "mozPathText", "mozTextAlongPath", "strokeText"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/Drawing_text_using_a_canvas#Additional_examples",
      "title":"Examples by Mozilla"
    },
    {
      "url":"http://code.google.com/p/canvas-text/",
      "title":"Support library"
    },
    {
      "url":"https://raw.github.com/phiggins42/has.js/master/detect/graphics.js#canvas-text",
      "title":"has.js test"
    },
    {
      "url":"http://docs.webplatform.org/wiki/apis/canvas/CanvasRenderingContext2D/fillText",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "Canvas",
    "HTML5"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"p",
      "7":"p",
      "8":"p",
      "9":"y",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"p",
      "3":"p",
      "3.5":"y",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"p",
      "3.2":"p",
      "4":"y",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"p",
      "9.5-9.6":"p",
      "10.0-10.1":"p",
      "10.5":"y",
      "10.6":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"y",
      "4.0-4.1":"y",
      "4.2-4.3":"y",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"y",
      "2.2":"y",
      "2.3":"y",
      "3":"y",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"p",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":90.58,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"canvas",
  "keywords":"",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Channel messaging",
  "description":"Method for having two-way communication between browsing contexts (using MessageChannel)",
  "spec":"http://www.w3.org/TR/webmessaging/#channel-messaging",
  "status":"cr",
  "triggers": ["postMessage"],
  "links":[
    {
      "url":"https://dev.opera.com/articles/view/window-postmessage-messagechannel/#channel",
      "title":"An Introduction to HTML5 web messaging"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n d #1",
      "27":"n d #1",
      "28":"n d #1",
      "29":"n d #1",
      "30":"n d #1",
      "31":"n d #1",
      "32":"n d #1",
      "33":"n d #1",
      "34":"n d #1",
      "35":"n d #1",
      "36":"n d #1",
      "37":"n d #1"
    },
    "chrome":{
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"u",
      "10.0-10.1":"u",
      "10.5":"u",
      "10.6":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"u",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"n"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    "1":"Supported in Firefox behind the `dom.messageChannel.enabled` flag."
  },
  "usage_perc_y":71.99,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"x-doc-messaging",
  "keywords":"",
  "ie_id":"messagechannels",
  "chrome_id":"6710044586409984",
  "shown":true
}, {
  "title":"classList (DOMTokenList )",
  "description":"Method of easily manipulating classes on elements, using the DOMTokenList object.",
  "spec":"http://www.w3.org/TR/dom/#dom-element-classlist",
  "status":"wd",
  "triggers": ["classList"],
  "links":[
    {
      "url":"http://hacks.mozilla.org/2010/01/classlist-in-firefox-3-6/",
      "title":"Mozilla Hacks article"
    },
    {
      "url":"https://github.com/eligrey/classList.js",
      "title":"Polyfill script"
    },
    {
      "url":"http://docs.webplatform.org/wiki/dom/Element/classList",
      "title":"WebPlatform Docs"
    },
    {
      "url":"http://www.sitepoint.com/exploring-classlist-api/",
      "title":"SitePoint article"
    },
    {
      "url":"http://aurelio.audero.it/demo/classlist-api-demo.html",
      "title":"Demo using classList"
    }
  ],
  "bugs":[
    {
      "description":"[Internet Explorer 11 doesn't support multiple tokens passed to the `add` function](https://connect.microsoft.com/IE/Feedback/Details/920755); only the first is used."
    }
  ],
  "categories":[
    "DOM",
    "HTML5"
  ],
  "stats":{
    "ie":{
      "5.5":"p",
      "6":"p",
      "7":"p",
      "8":"p",
      "9":"p",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"p",
      "3":"p",
      "3.5":"p",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"p",
      "5":"p",
      "6":"p",
      "7":"p",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"p",
      "3.2":"p",
      "4":"p",
      "5":"p",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"p",
      "9.5-9.6":"p",
      "10.0-10.1":"p",
      "10.5":"p",
      "10.6":"p",
      "11":"p",
      "11.1":"p",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"p",
      "4.0-4.1":"p",
      "4.2-4.3":"p",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"p"
    },
    "android":{
      "2.1":"p",
      "2.2":"p",
      "2.3":"p",
      "3":"y",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"p",
      "11":"p",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":87.9,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Clipboard API",
  "description":"API to provide copy, cut and paste functionality using the OS clipboard.",
  "spec":"http://www.w3.org/TR/clipboard-apis/",
  "status":"wd",
  "triggers": ["ClipboardEvent"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent",
      "title":"MDN page on ClipboardEvent"
    },
    {
      "url":"http://www.deluxeblogtips.com/2010/06/javascript-copy-to-clipboard.html",
      "title":"Blog post on cross-browser usage"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"a #1",
      "6":"a #1",
      "7":"a #1",
      "8":"a #1",
      "9":"a #1",
      "10":"a #1",
      "11":"a #1",
      "TP":"a #1"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"a",
      "14":"a",
      "15":"a",
      "16":"a",
      "17":"a",
      "18":"a",
      "19":"a",
      "20":"a",
      "21":"a",
      "22":"a",
      "23":"a",
      "24":"a",
      "25":"a",
      "26":"a",
      "27":"a",
      "28":"a",
      "29":"a",
      "30":"a",
      "31":"a",
      "32":"a",
      "33":"a",
      "34":"a",
      "35":"a",
      "36":"a",
      "37":"a",
      "38":"a",
      "39":"a",
      "40":"a",
      "41":"a",
      "42":"a"
    },
    "safari":{
      "3.1":"u",
      "3.2":"u",
      "4":"a",
      "5":"a",
      "5.1":"a",
      "6":"a",
      "6.1":"a",
      "7":"a",
      "7.1":"a",
      "8":"a"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"n",
      "16":"a",
      "17":"a",
      "18":"a",
      "19":"a",
      "20":"a",
      "21":"a",
      "22":"a",
      "23":"a",
      "24":"a",
      "25":"a",
      "26":"a",
      "27":"a",
      "28":"a"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"a",
      "6.0-6.1":"a",
      "7.0-7.1":"a",
      "8":"a",
      "8.1":"a"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"a",
      "4.4.3-4.4.4":"a",
      "37":"a"
    },
    "bb":{
      "7":"n",
      "10":"a"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"a"
    },
    "and_chr":{
      "39":"a"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"Partial support in IE refers using [a non-standard method](http://msdn.microsoft.com/en-us/library/ie/ms535220%28v=vs.85%29.aspx) of interacting with the clipboard. For other browsers it refers to not supporting the ClipboardEvent constructor.",
  "notes_by_num":{
    
  },
  "usage_perc_y":11.9,
  "usage_perc_a":73.66,
  "ucprefix":false,
  "parent":"",
  "keywords":"cut,copy,paste,clipboarddata",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Web Cryptography",
  "description":"JavaScript API for performing basic cryptographic operations in web applications",
  "spec":"http://www.w3.org/TR/WebCryptoAPI/",
  "status":"wd",
  "triggers": ["crypto", "msCrypto"],
  "links":[
    {
      "url":"http://www.slideshare.net/Channy/the-history-and-status-of-web-crypto-api",
      "title":"The History and Status of Web Crypto API"
    },
    {
      "url":"http://research.microsoft.com/en-us/projects/msrjscrypto/",
      "title":"Microsoft Research JavaScript Cryptography Library"
    },
    {
      "url":"http://bitwiseshiftleft.github.io/sjcl/",
      "title":"Cross-browser cryptography library"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"p",
      "7":"p",
      "8":"p",
      "9":"p",
      "10":"p",
      "11":"a x #1",
      "TP":"y"
    },
    "firefox":{
      "2":"p",
      "3":"p",
      "3.5":"p",
      "3.6":"p",
      "4":"p",
      "5":"p",
      "6":"p",
      "7":"p",
      "8":"p",
      "9":"p",
      "10":"p",
      "11":"p",
      "12":"p",
      "13":"p",
      "14":"p",
      "15":"p",
      "16":"p",
      "17":"p",
      "18":"p",
      "19":"p",
      "20":"p",
      "21":"p",
      "22":"p",
      "23":"p",
      "24":"p",
      "25":"p",
      "26":"p",
      "27":"p",
      "28":"p",
      "29":"p",
      "30":"p",
      "31":"p",
      "32":"n d #2",
      "33":"n d #2",
      "34":"a #4",
      "35":"a #4",
      "36":"a #4",
      "37":"a #4"
    },
    "chrome":{
      "4":"p",
      "5":"p",
      "6":"p",
      "7":"p",
      "8":"p",
      "9":"p",
      "10":"p",
      "11":"p",
      "12":"p",
      "13":"p",
      "14":"p",
      "15":"p",
      "16":"p",
      "17":"p",
      "18":"p",
      "19":"p",
      "20":"p",
      "21":"p",
      "22":"p",
      "23":"p",
      "24":"p",
      "25":"p",
      "26":"p",
      "27":"p",
      "28":"p",
      "29":"p",
      "30":"p",
      "31":"p",
      "32":"p",
      "33":"p",
      "34":"p",
      "35":"p",
      "36":"p",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"p",
      "3.2":"p",
      "4":"p",
      "5":"p",
      "5.1":"p",
      "6":"p",
      "6.1":"p",
      "7":"p",
      "7.1":"y x #3",
      "8":"y x #3"
    },
    "opera":{
      "9":"p",
      "9.5-9.6":"p",
      "10.0-10.1":"p",
      "10.5":"p",
      "10.6":"p",
      "11":"p",
      "11.1":"p",
      "11.5":"p",
      "11.6":"p",
      "12":"p",
      "12.1":"p",
      "15":"p",
      "16":"p",
      "17":"p",
      "18":"p",
      "19":"p",
      "20":"p",
      "21":"p",
      "22":"p",
      "23":"p",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"p",
      "4.0-4.1":"p",
      "4.2-4.3":"p",
      "5.0-5.1":"p",
      "6.0-6.1":"p",
      "7.0-7.1":"p",
      "8":"y x #3",
      "8.1":"y x #3"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"p",
      "2.2":"p",
      "2.3":"p",
      "3":"p",
      "4":"p",
      "4.1":"p",
      "4.2-4.3":"p",
      "4.4":"p",
      "4.4.3-4.4.4":"p",
      "37":"y"
    },
    "bb":{
      "7":"p",
      "10":"p"
    },
    "op_mob":{
      "10":"p",
      "11":"p",
      "11.1":"p",
      "11.5":"p",
      "12":"p",
      "12.1":"p",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"p"
    },
    "ie_mob":{
      "10":"p",
      "11":"a x #1"
    },
    "and_uc":{
      "9.9":"p"
    }
  },
  "notes":"Many browsers support the `[crypto.getRandomValues()](#feat=getrandomvalues)` method, but not actual cryptography functionality under `crypto.subtle`. \r\n\r\nFirefox also has support for [unofficial features](https://developer.mozilla.org/en-US/docs/JavaScript_crypto). \r\n\r\nIn Chrome the API is only usable over secure connections. ([corresponding bug](https://code.google.com/p/chromium/issues/detail?id=373032))",
  "notes_by_num":{
    "1":"Support in IE11 is based an older version of the specification. ",
    "2":"Supported in Firefox behind the `dom.webcrypto.enabled` flag. ",
    "3":"Supported in Safari using the `crypto.webkitSubtle` prefix",
    "4":"Partial support in Firefox is [described here](https://docs.google.com/spreadsheet/ccc?key=0AiAcidBZRLxndE9LWEs2R1oxZ0xidUVoU3FQbFFobkE#gid=1)"
  },
  "usage_perc_y":43.86,
  "usage_perc_a":7.53,
  "ucprefix":false,
  "parent":"",
  "keywords":"subtle,subtlecrypto",
  "ie_id":"webcryptoapi",
  "chrome_id":"5030265697075200",
  "shown":true
}, {
  "title":"Custom Elements",
  "description":"Method of defining and using new types of DOM elements in a document.",
  "spec":"http://www.w3.org/TR/custom-elements/",
  "status":"wd",
  "triggers": ["registerElement"],
  "links":[
    {
      "url":"http://w3c.github.io/webcomponents/spec/custom/",
      "title":"W3C Editor's Draft spec (closer to current implementations)"
    },
    {
      "url":"http://www.polymer-project.org/platform/custom-elements.html",
      "title":"Polymer project (polyfill & web components framework)"
    },
    {
      "url":"http://www.html5rocks.com/tutorials/webcomponents/customelements/",
      "title":"HTML5Rocks - Custom Elements: defining new elements in HTML"
    },
    {
      "url":"https://code.google.com/p/chromium/issues/detail?id=234509",
      "title":"Chromium tracking bug: Implement Custom Elements"
    },
    {
      "url":"https://bugzilla.mozilla.org/show_bug.cgi?id=889230",
      "title":"Firefox tracking bug: Implement Custom Elements (from Web Components)"
    },
    {
      "url":"http://status.modern.ie/customelements",
      "title":"IE Web Platform Status and Roadmap: Custom Elements"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "DOM",
    "HTML5"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"p",
      "11":"p",
      "TP":"p"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n d #1",
      "24":"n d #1",
      "25":"n d #1",
      "26":"n d #1",
      "27":"n d #1",
      "28":"n d #1",
      "29":"n d #1",
      "30":"p d #1",
      "31":"p d #1",
      "32":"p d #1",
      "33":"p d #1",
      "34":"p d #1",
      "35":"p d #1",
      "36":"p d #1",
      "37":"p d #1"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n d",
      "28":"n d",
      "29":"n d",
      "30":"n d",
      "31":"n d",
      "32":"n d",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"p",
      "6.1":"p",
      "7":"p",
      "7.1":"p",
      "8":"p"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"n d",
      "16":"n d",
      "17":"n d",
      "18":"n d",
      "19":"n d",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"p",
      "8":"p",
      "8.1":"p"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"p d #1"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"",
  "notes_by_num":{
    "1":"Enabled through the \"dom.webcomponents.enabled\" preference in about:config"
  },
  "usage_perc_y":42.65,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"web components",
  "ie_id":"customelements",
  "chrome_id":"4642138092470272",
  "shown":true
}, {
  "title":"DeviceOrientation events",
  "description":"API for detecting orientation and motion events from the device running the browser.",
  "spec":"http://www.w3.org/TR/orientation-event/",
  "status":"wd",
  "triggers": ["deviceorientation", "devicemotion"],
  "links":[
    {
      "url":"http://www.html5rocks.com/en/tutorials/device/orientation/",
      "title":"HTML5 Rocks tutorial"
    },
    {
      "url":"https://raw.github.com/phiggins42/has.js/master/detect/features.js#native-orientation",
      "title":"has.js test"
    },
    {
      "url":"http://html5labs.interoperabilitybridges.com/prototypes/device-orientation-events/device-orientation-events/info",
      "title":"DeviceOrientation implementation prototype for IE10"
    },
    {
      "url":"http://aurelio.audero.it/demo/device-orientation-api-demo.html",
      "title":"Demo"
    }
  ],
  "bugs":[
    {
      "description":"`DeviceOrientationEvent.beta` has values between -90 and 90 on mobile Safari and between 180 and -180 on Firefox.\r\n`DeviceOrientationEvent.gamma` has values between -180 and 180 on mobile Safari and between 90 and -90 on Firefox.\r\nSee [Firefox reference](https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent)\r\nand [Safari reference](https://developer.apple.com/library/safari/documentation/SafariDOMAdditions/Reference/DeviceOrientationEventClassRef/DeviceOrientationEvent/DeviceOrientationEvent.html#//apple_ref/javascript/instp/DeviceOrientationEvent/beta)"
    }
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"a",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"p",
      "4":"p",
      "5":"p",
      "6":"a",
      "7":"a",
      "8":"a",
      "9":"a",
      "10":"a",
      "11":"a",
      "12":"a",
      "13":"a",
      "14":"a",
      "15":"a",
      "16":"a",
      "17":"a",
      "18":"a",
      "19":"a",
      "20":"a",
      "21":"a",
      "22":"a",
      "23":"a",
      "24":"a",
      "25":"a",
      "26":"a",
      "27":"a",
      "28":"a",
      "29":"a",
      "30":"a",
      "31":"a",
      "32":"a",
      "33":"a",
      "34":"a",
      "35":"a",
      "36":"a",
      "37":"a"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"a",
      "8":"a",
      "9":"a",
      "10":"a",
      "11":"a",
      "12":"a",
      "13":"a",
      "14":"a",
      "15":"a",
      "16":"a",
      "17":"a",
      "18":"a",
      "19":"a",
      "20":"a",
      "21":"a",
      "22":"a",
      "23":"a",
      "24":"a",
      "25":"a",
      "26":"a",
      "27":"a",
      "28":"a",
      "29":"a",
      "30":"a",
      "31":"a",
      "32":"a",
      "33":"a",
      "34":"a",
      "35":"a",
      "36":"a",
      "37":"a",
      "38":"a",
      "39":"a",
      "40":"a",
      "41":"a",
      "42":"a"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"n",
      "7":"n",
      "7.1":"n",
      "8":"n"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"a",
      "16":"a",
      "17":"a",
      "18":"a",
      "19":"a",
      "20":"a",
      "21":"a",
      "22":"a",
      "23":"a",
      "24":"a",
      "25":"a",
      "26":"a",
      "27":"a",
      "28":"a"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"a",
      "5.0-5.1":"a",
      "6.0-6.1":"a",
      "7.0-7.1":"a",
      "8":"a",
      "8.1":"a"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"a",
      "4":"a",
      "4.1":"a",
      "4.2-4.3":"a",
      "4.4":"a",
      "4.4.3-4.4.4":"a",
      "37":"a"
    },
    "bb":{
      "7":"n",
      "10":"a"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"y",
      "12.1":"y",
      "24":"a"
    },
    "and_chr":{
      "39":"a"
    },
    "and_ff":{
      "33":"a"
    },
    "ie_mob":{
      "10":"n",
      "11":"y"
    },
    "and_uc":{
      "9.9":"a"
    }
  },
  "notes":"Partial support refers to the lack of compassneedscalibration event. Partial support also refers to the lack of devicemotion event support for Chrome 30- and Opera. Opera Mobile 14 lost the ondevicemotion event support. Firefox 3.6, 4 and 5 support the non-standard [MozOrientation](https://developer.mozilla.org/en/DOM/MozOrientation) event.",
  "notes_by_num":{
    
  },
  "usage_perc_y":0.04,
  "usage_perc_a":81.86,
  "ucprefix":false,
  "parent":"",
  "keywords":"",
  "ie_id":"deviceorientation,devicemotion",
  "chrome_id":"5874690627207168,5556931766779904",
  "shown":true
}, {
  "title":"Dialog element",
  "description":"Method of easily creating custom dialog boxes to display to the user with modal or non-modal options. Also includes a `::backdrop` pseudo-element for behind the element.",
  "spec":"https://html.spec.whatwg.org/multipage/forms.html#the-dialog-element",
  "status":"ls",
  "triggers": ["showModal"],
  "links":[
    {
      "url":"https://github.com/GoogleChrome/dialog-polyfill",
      "title":"Polyfill"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "DOM",
    "HTML5"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"n"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n",
      "29":"n",
      "30":"n",
      "31":"n",
      "32":"n",
      "33":"n",
      "34":"n",
      "35":"u",
      "36":"u",
      "37":"u"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n",
      "29":"n",
      "30":"n",
      "31":"n",
      "32":"n d #1",
      "33":"n d #1",
      "34":"n d #1",
      "35":"n d #1",
      "36":"n d #1",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"n",
      "7":"n",
      "7.1":"n",
      "8":"n"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n d #2",
      "20":"n d #2",
      "21":"n d #2",
      "22":"n d #2",
      "23":"n d #2",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"n",
      "8":"n",
      "8.1":"n"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"y"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"n"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"",
  "notes_by_num":{
    "1":"Enabled through the \"Experimental Web Platform features\" flag in `chrome://flags`",
    "2":"Enabled through the \"Experimental Web Platform features\" flag in `opera://flags`"
  },
  "usage_perc_y":38.48,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"HTMLDialogElement,showModal,backdrop",
  "ie_id":"",
  "chrome_id":"5770237022568448",
  "shown":true
}, {
  "title":"DOMContentLoaded",
  "description":"JavaScript event that fires when the DOM is loaded, but before all page assets are loaded (CSS, images, etc.).",
  "spec":"https://html.spec.whatwg.org/multipage/syntax.html#stop-parsing",
  "status":"ls",
  "triggers": ["DOMContentLoaded"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en-US/docs/Web/Reference/Events/DOMContentLoaded",
      "title":"MDN: DOMContentLoaded"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "DOM"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"y",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"y",
      "3":"y",
      "3.5":"y",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"y",
      "3.2":"y",
      "4":"y",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"y",
      "9.5-9.6":"y",
      "10.0-10.1":"y",
      "10.5":"y",
      "10.6":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"y",
      "4.0-4.1":"y",
      "4.2-4.3":"y",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"y"
    },
    "android":{
      "2.1":"y",
      "2.2":"y",
      "2.3":"y",
      "3":"y",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":93.51,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"dom,domready,onload,contentloaded,document",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Drag and Drop",
  "description":"Method of easily dragging and dropping elements on a page, requiring minimal JavaScript.",
  "spec":"https://html.spec.whatwg.org/multipage/interaction.html#dnd",
  "status":"ls",
  "triggers": ["dragover", "dragenter"],
  "links":[
    {
      "url":"http://html5doctor.com/native-drag-and-drop/",
      "title":"HTML5 Doctor article"
    },
    {
      "url":"http://nettutsplus.s3.amazonaws.com/64_html5dragdrop/demo/index.html",
      "title":"Shopping cart demo"
    },
    {
      "url":"http://html5demos.com/drag",
      "title":"Demo with link blocks"
    },
    {
      "url":"http://docs.webplatform.org/wiki/dom/DragEvent",
      "title":"WebPlatform Docs"
    },
    {
      "url":"https://github.com/MihaiValentin/setDragImage-IE",
      "title":"Polyfill for setDragImage in IE"
    },
    {
      "url":"http://blog.teamtreehouse.com/implementing-native-drag-and-drop",
      "title":"Implementing Native Drag and Drop"
    }
  ],
  "bugs":[
    {
      "description":"In Chrome, DataTransfer.addElement is not implemented. There is no other way to implement a draggable object, that updates during the drag due to some other circumstances (e.g. changes color on a valid drop spot), as it is just a static image if addElement is not supported.\r\n"
    },
    {
      "description":"In Firefox, the dragstart event does not fire on button elements. This effectively disables drag and drop for button elements.\r\n"
    },
    {
      "description":"In IE9-10 draggable attribute could be effectively applied for link and image elements. For div and span elements you should call 'element.dragDrop()' to start drag event.\r\n"
    }
  ],
  "categories":[
    "HTML5"
  ],
  "stats":{
    "ie":{
      "5.5":"a #1",
      "6":"a #1",
      "7":"a #1",
      "8":"a #1",
      "9":"a #1",
      "10":"a #2",
      "11":"a #2",
      "TP":"a #2"
    },
    "firefox":{
      "2":"p",
      "3":"p",
      "3.5":"y",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"y",
      "3.2":"y",
      "4":"y",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"p",
      "9.5-9.6":"p",
      "10.0-10.1":"p",
      "10.5":"p",
      "10.6":"p",
      "11":"p",
      "11.1":"p",
      "11.5":"p",
      "11.6":"p",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"n",
      "8":"n",
      "8.1":"n"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"n"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"p",
      "11":"p",
      "11.1":"p",
      "11.5":"p",
      "12":"p",
      "12.1":"y",
      "24":"n"
    },
    "and_chr":{
      "39":"n"
    },
    "and_ff":{
      "33":"n"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"`dataTransfer.items` only supported by Chrome.\r\n\r\nCurrently no browser supports the `dropzone` attribute.\r\n\r\nFirefox supports any kind of DOM elements for `.setDragImage`. Chrome must have either an `HTMLImageElement` or any kind of DOM elements attached to the DOM and within the viewport of the browser for `.setDragImage`.",
  "notes_by_num":{
    "1":"Partial support refers to no support for the `dataTransfer.files` or `.types` objects and limited supported formats for `dataTransfer.setData`/`getData`.",
    "2":"Partial support refers to not supporting `.setDragImage`"
  },
  "usage_perc_y":51.26,
  "usage_perc_a":14.96,
  "ucprefix":false,
  "parent":"",
  "keywords":"draganddrop",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"File API",
  "description":"Method of manipulating file objects in web applications client-side, as well as programmatically selecting them and accessing their data.",
  "spec":"http://www.w3.org/TR/FileAPI/",
  "status":"wd",
  "triggers": ["File", "FileList"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/Using_files_from_web_applications",
      "title":"MDN article"
    },
    {
      "url":"http://docs.webplatform.org/wiki/apis/file",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"a",
      "7":"a",
      "8":"a",
      "9":"a",
      "10":"a",
      "11":"a",
      "12":"a",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"a",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"a",
      "4":"a",
      "4.1":"a",
      "4.2-4.3":"a",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"a",
      "10":"y"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"Partial support in older Safari and other WebKit browsers refers to lacking FileReader support. ",
  "notes_by_num":{
    
  },
  "usage_perc_y":83.09,
  "usage_perc_a":4.34,
  "ucprefix":false,
  "parent":"",
  "keywords":"FileReader",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Server-sent events",
  "description":"Method of continuously sending data from a server to the browser, rather than repeatedly requesting it (EventSource interface, used to fall under HTML5)",
  "spec":"http://www.w3.org/TR/eventsource/",
  "status":"pr",
  "triggers": ["EventSource"],
  "links":[
    {
      "url":"http://www.html5rocks.com/tutorials/eventsource/basics/",
      "title":"HTML5 Rocks tutorial"
    },
    {
      "url":"http://samshull.blogspot.com/2010/10/ajax-push-in-ios-safari-and-chrome-with.html",
      "title":"Blog post with demo"
    },
    {
      "url":"https://raw.github.com/phiggins42/has.js/master/detect/features.js#native-eventsource",
      "title":"has.js test"
    }
  ],
  "bugs":[
    {
      "description":"Reportedly, CORS in EventSource is currently supported in Firefox 10+, Opera 12+, Chrome 26+, Safari 7.0+."
    },
    {
      "description":"In Firefox prior to version 36 server-sent events do not reconnect automatically in case of a connection interrupt ([bug](https://bugzilla.mozilla.org/show_bug.cgi?id=831392))"
    }
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"n"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"a",
      "9.5-9.6":"a",
      "10.0-10.1":"a",
      "10.5":"a",
      "10.6":"a",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"y",
      "4.2-4.3":"y",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"a",
      "11":"a",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":74.58,
  "usage_perc_a":0.05,
  "ucprefix":false,
  "parent":"",
  "keywords":"serversent,s-sent-events",
  "ie_id":"serversenteventseventsource",
  "chrome_id":"5311740673785856",
  "shown":true
}, {
  "title":"FileReader API",
  "description":"Method of reading the contents of a File or Blob object into memory",
  "spec":"http://www.w3.org/TR/FileAPI/#dfn-filereader",
  "status":"wd",
  "triggers": ["new FileReader"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/DOM/FileReader",
      "title":"FileReader API"
    },
    {
      "url":"http://docs.webplatform.org/wiki/apis/file/FileReader",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    {
      "description":"The FileReader object is not available in Firefox to web workers."
    },
    {
      "description":"iOS 8 had some [fileReader bugs](http://blog.fineuploader.com/2014/09/10/ios8-presents-serious-issues-that-prevent-file-uploading/) of which some were fixed in 8.0.2 but others still remain."
    }
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"y",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"n",
      "10":"y"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":87.3,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"fileapi",
  "keywords":"",
  "ie_id":"filereader",
  "chrome_id":"5171003185430528",
  "shown":true
}, {
  "title":"Filesystem & FileWriter API",
  "description":"Method of reading and writing files to a sandboxed file system.",
  "spec":"http://www.w3.org/TR/file-system-api/",
  "status":"unoff",
  "triggers": ["requestFileSystem", "webkitRequestFileSystem"],
  "links":[
    {
      "url":"http://www.html5rocks.com/en/tutorials/file/filesystem/",
      "title":"HTML5 Rocks tutorial"
    },
    {
      "url":"http://docs.webplatform.org/wiki/apis/filesystem",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"n"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n",
      "29":"n",
      "30":"n",
      "31":"n",
      "32":"n",
      "33":"n",
      "34":"n",
      "35":"n",
      "36":"n",
      "37":"n"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"a x",
      "9":"a x",
      "10":"a x",
      "11":"a x",
      "12":"a x",
      "13":"y x",
      "14":"y x",
      "15":"y x",
      "16":"y x",
      "17":"y x",
      "18":"y x",
      "19":"y x",
      "20":"y x",
      "21":"y x",
      "22":"y x",
      "23":"y x",
      "24":"y x",
      "25":"y x",
      "26":"y x",
      "27":"y x",
      "28":"y x",
      "29":"y x",
      "30":"y x",
      "31":"y x",
      "32":"y x",
      "33":"y x",
      "34":"y x",
      "35":"y x",
      "36":"y x",
      "37":"y x",
      "38":"y x",
      "39":"y x",
      "40":"y x",
      "41":"y x",
      "42":"y x"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"n",
      "7":"n",
      "7.1":"n",
      "8":"n"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"y x",
      "16":"y x",
      "17":"y x",
      "18":"y x",
      "19":"y x",
      "20":"y x",
      "21":"y x",
      "22":"y x",
      "23":"y x",
      "24":"y x",
      "25":"y x",
      "26":"y x",
      "27":"y x",
      "28":"y x"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"n",
      "8":"n",
      "8.1":"n"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"n"
    },
    "bb":{
      "7":"n",
      "10":"y x"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y x"
    },
    "and_chr":{
      "39":"y x"
    },
    "and_ff":{
      "33":"n"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"The File API: Directories and System specification is no longer being maintained and support may be dropped in future versions.",
  "notes_by_num":{
    
  },
  "usage_perc_y":44.01,
  "usage_perc_a":0.18,
  "ucprefix":false,
  "parent":"",
  "keywords":"filewriter",
  "ie_id":"filewriter",
  "chrome_id":"5452478162141184",
  "shown":true
}, {
  "title":"Full Screen API",
  "description":"API for allowing content (like a video or canvas element) to take up the entire screen.",
  "spec":"http://www.w3.org/TR/fullscreen/",
  "status":"wd",
  "triggers": ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/DOM/Using_full-screen_mode",
      "title":"MDN article"
    },
    {
      "url":"http://jlongster.com/2011/11/21/canvas.html",
      "title":"Blog post"
    },
    {
      "url":"http://hacks.mozilla.org/2012/01/using-the-fullscreen-api-in-web-browsers/",
      "title":"Mozilla hacks article"
    },
    {
      "url":"http://docs.webplatform.org/wiki/dom/Element/requestFullscreen",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    {
      "description":"Safari blocks access to keyboard events in fullscreen mode (as a security measure)."
    },
    {
      "description":"IE 11 does not allow scrolling when document.documentElement is set to full screen."
    },
    {
      "description":"IE 11 does not properly support fullscreen when opening from an iframe."
    },
    {
      "description":"IE 11 doesn't allow going to fullscreen mode when the event that triggers `msRequestFullscreen()` is a `keydown` event (`keypress` does work)"
    },
    {
      "description":"Opera 12.1 uses the older specificaton's `:fullscreen-ancestor` pseudo-class instead of the  the `::backdrop` pseudo-element."
    }
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"y x",
      "TP":"y x"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"a x",
      "11":"a x",
      "12":"a x",
      "13":"a x",
      "14":"a x",
      "15":"a x",
      "16":"a x",
      "17":"a x",
      "18":"a x",
      "19":"a x",
      "20":"a x",
      "21":"a x",
      "22":"a x",
      "23":"a x",
      "24":"a x",
      "25":"a x",
      "26":"a x",
      "27":"a x",
      "28":"a x",
      "29":"a x",
      "30":"a x",
      "31":"a x",
      "32":"a x",
      "33":"a x",
      "34":"a x",
      "35":"a x",
      "36":"a x",
      "37":"a x"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"a x",
      "16":"a x",
      "17":"a x",
      "18":"a x",
      "19":"a x",
      "20":"y x",
      "21":"y x",
      "22":"y x",
      "23":"y x",
      "24":"y x",
      "25":"y x",
      "26":"y x",
      "27":"y x",
      "28":"y x",
      "29":"y x",
      "30":"y x",
      "31":"y x",
      "32":"y x",
      "33":"y x",
      "34":"y x",
      "35":"y x",
      "36":"y x",
      "37":"y x",
      "38":"y x",
      "39":"y x",
      "40":"y x",
      "41":"y x",
      "42":"y x"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"a x",
      "6":"y x",
      "6.1":"y x",
      "7":"y x",
      "7.1":"y x",
      "8":"y x"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"y",
      "15":"y x",
      "16":"y x",
      "17":"y x",
      "18":"y x",
      "19":"y x",
      "20":"y x",
      "21":"y x",
      "22":"y x",
      "23":"y x",
      "24":"y x",
      "25":"y x",
      "26":"y x",
      "27":"y x",
      "28":"y x"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"n",
      "8":"n",
      "8.1":"n"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"n"
    },
    "bb":{
      "7":"n",
      "10":"a"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y x"
    },
    "and_chr":{
      "39":"y x"
    },
    "and_ff":{
      "33":"a x"
    },
    "ie_mob":{
      "10":"n",
      "11":"y x"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"Partial support refers to supporting an earlier draft of the spec.",
  "notes_by_num":{
    
  },
  "usage_perc_y":54.02,
  "usage_perc_a":13.03,
  "ucprefix":false,
  "parent":"",
  "keywords":"full-screen",
  "ie_id":"fullscreenapi",
  "chrome_id":"5259513871466496",
  "shown":true
}, {
  "title":"Gamepad API",
  "description":"API to support input from USB gamepad controllers though JavaScript.",
  "spec":"http://www.w3.org/TR/gamepad/",
  "status":"wd",
  "triggers": ["gamepadconnected", "gamepaddisconnected", "getGamepads"],
  "links":[
    {
      "url":"http://luser.github.io/gamepadtest/",
      "title":"Controller demo"
    },
    {
      "url":"https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API",
      "title":"MDN article"
    },
    {
      "url":"http://www.html5rocks.com/en/tutorials/doodles/gamepad/",
      "title":"HTML5Rocks article"
    },
    {
      "url":"http://gamedevelopment.tutsplus.com/tutorials/using-the-html5-gamepad-api-to-add-controller-support-to-browser-games--cms-21345",
      "title":"Detailed tutorial"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"n",
      "25":"n",
      "26":"n",
      "27":"n",
      "28":"n",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"y x",
      "22":"y x",
      "23":"y x",
      "24":"y x",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"n",
      "7":"n",
      "7.1":"n",
      "8":"n"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"n",
      "22":"n",
      "23":"n",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"n",
      "8":"n",
      "8.1":"n"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"n",
      "4.4.3-4.4.4":"n",
      "37":"n"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"n"
    },
    "and_chr":{
      "39":"n"
    },
    "and_ff":{
      "33":"n"
    },
    "ie_mob":{
      "10":"n",
      "11":"n"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":45.37,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"",
  "ie_id":"gamepadapi",
  "chrome_id":"5118776383111168",
  "shown":true
}, {
  "title":"Geolocation",
  "description":"Method of informing a website of the user's geographical location",
  "spec":"http://www.w3.org/TR/geolocation-API/",
  "status":"cr",
  "triggers": ["geolocation", "getCurrentPosition", "watchPosition", "clearWatch"],
  "links":[
    {
      "url":"http://html5demos.com/geo",
      "title":"Simple demo"
    },
    {
      "url":"https://raw.github.com/phiggins42/has.js/master/detect/features.js#native-geolocation",
      "title":"has.js test"
    },
    {
      "url":"http://docs.webplatform.org/wiki/apis/geolocation",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    {
      "description":"IE9 appears to [have some issues](http://social.technet.microsoft.com/Forums/en-IE/ieitprocurrentver/thread/aea4db4e-0720-44fe-a9b8-09917e345080) in correctly determining longitude/latitude."
    },
    {
      "description":"iOS6 has problems with returning [high accuracy data](https://discussions.apple.com/thread/4313850?start=0&tstart=0)."
    },
    {
      "description":"Safari 5 & 6 seem to not provide geolocation data [when using a wired connection](http://stackoverflow.com/questions/3791442/geolocation-in-safari-5)."
    }
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"p",
      "7":"p",
      "8":"p",
      "9":"y",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"p",
      "3":"p",
      "3.5":"y",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"a",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"p",
      "3.2":"p",
      "4":"p",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"p",
      "10.5":"p",
      "10.6":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"n",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"y",
      "4.0-4.1":"y",
      "4.2-4.3":"y",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"y",
      "2.2":"y",
      "2.3":"y",
      "3":"y",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"p",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":90.47,
  "usage_perc_a":0.01,
  "ucprefix":false,
  "parent":"",
  "keywords":"",
  "ie_id":"geolocation",
  "chrome_id":"6348855016685568",
  "shown":true
}, {
  "title":"getComputedStyle",
  "description":"API to get the current computed CSS styles applied to an element. This may be the current value applied by an animation or as set by a stylesheet.",
  "spec":"http://www.w3.org/TR/cssom/#dom-window-getcomputedstyle",
  "status":"rec",
  "triggers": ["getComputedStyle"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/DOM/window.getComputedStyle",
      "title":"MDN article"
    },
    {
      "url":"http://ie.microsoft.com/testdrive/HTML5/getComputedStyle/",
      "title":"Demo"
    },
    {
      "url":"http://snipplr.com/view/13523/",
      "title":"Polyfill for IE"
    },
    {
      "url":"http://docs.webplatform.org/wiki/css/cssom/methods/getComputedStyle",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "CSS3",
    "DOM",
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"y",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"a",
      "3.5":"a",
      "3.6":"a",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"a",
      "5":"a",
      "6":"a",
      "7":"a",
      "8":"a",
      "9":"a",
      "10":"a",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"a",
      "3.2":"a",
      "4":"a",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"a",
      "9.5-9.6":"a",
      "10.0-10.1":"a",
      "10.5":"a",
      "10.6":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"a",
      "4.0-4.1":"a",
      "4.2-4.3":"a",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"a"
    },
    "android":{
      "2.1":"a",
      "2.2":"a",
      "2.3":"a",
      "3":"a",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"a",
      "10":"y"
    },
    "op_mob":{
      "10":"a",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"Partial support in older Firefox versions refers to requiring the second parameter to be included.\r\n\r\nPartial support in all other browsers refers to not supporting getComputedStyle on pseudo-elements.",
  "notes_by_num":{
    
  },
  "usage_perc_y":89.99,
  "usage_perc_a":3.51,
  "ucprefix":false,
  "parent":"",
  "keywords":"",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"crypto.getRandomValues()",
  "description":"Method of generating cryptographically random values.",
  "spec":"http://www.w3.org/TR/WebCryptoAPI/#RandomSource-method-getRandomValues",
  "status":"wd",
  "triggers": ["getRandomValues"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues",
      "title":"MDN article"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"y x",
      "TP":"y"
    },
    "firefox":{
      "2":"n",
      "3":"n",
      "3.5":"n",
      "3.6":"n",
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"n",
      "12":"n",
      "13":"n",
      "14":"n",
      "15":"n",
      "16":"n",
      "17":"n",
      "18":"n",
      "19":"n",
      "20":"n",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"n",
      "5":"n",
      "6":"n",
      "7":"n",
      "8":"n",
      "9":"n",
      "10":"n",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"n",
      "3.2":"n",
      "4":"n",
      "5":"n",
      "5.1":"n",
      "6":"n",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"n",
      "9.5-9.6":"n",
      "10.0-10.1":"n",
      "10.5":"n",
      "10.6":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "11.6":"n",
      "12":"n",
      "12.1":"n",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"n",
      "4.2-4.3":"n",
      "5.0-5.1":"n",
      "6.0-6.1":"n",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"n",
      "2.3":"n",
      "3":"n",
      "4":"n",
      "4.1":"n",
      "4.2-4.3":"n",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"n",
      "10":"n"
    },
    "op_mob":{
      "10":"n",
      "11":"n",
      "11.1":"n",
      "11.5":"n",
      "12":"n",
      "12.1":"n",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"n",
      "11":"y x"
    },
    "and_uc":{
      "9.9":"n"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":76.99,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}, {
  "title":"Hashchange event",
  "description":"Event triggered in JavaScript when the URL's hash has changed (for example: page.html#foo to page.html#bar) ",
  "spec":"https://html.spec.whatwg.org/multipage/browsers.html#the-hashchangeevent-interface",
  "status":"ls",
  "triggers": ["hashchange"],
  "links":[
    {
      "url":"https://developer.mozilla.org/en/DOM/window.onhashchange",
      "title":"MDN article"
    },
    {
      "url":"http://msdn.microsoft.com/en-us/library/cc288209(VS.85).aspx",
      "title":"MSDN article"
    },
    {
      "url":"http://www.quirksmode.org/dom/events/tests/hashchange.html",
      "title":"Simple demo"
    },
    {
      "url":"http://github.com/3nr1c/jUri.js",
      "title":"Polyfill"
    },
    {
      "url":"http://docs.webplatform.org/wiki/dom/Element/hashchange",
      "title":"WebPlatform Docs"
    }
  ],
  "bugs":[
    
  ],
  "categories":[
    "HTML5",
    "JS API"
  ],
  "stats":{
    "ie":{
      "5.5":"p",
      "6":"p",
      "7":"p",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "TP":"y"
    },
    "firefox":{
      "2":"p",
      "3":"p",
      "3.5":"p",
      "3.6":"y",
      "4":"y",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y"
    },
    "chrome":{
      "4":"p",
      "5":"y",
      "6":"y",
      "7":"y",
      "8":"y",
      "9":"y",
      "10":"y",
      "11":"y",
      "12":"y",
      "13":"y",
      "14":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y",
      "29":"y",
      "30":"y",
      "31":"y",
      "32":"y",
      "33":"y",
      "34":"y",
      "35":"y",
      "36":"y",
      "37":"y",
      "38":"y",
      "39":"y",
      "40":"y",
      "41":"y",
      "42":"y"
    },
    "safari":{
      "3.1":"p",
      "3.2":"p",
      "4":"p",
      "5":"y",
      "5.1":"y",
      "6":"y",
      "6.1":"y",
      "7":"y",
      "7.1":"y",
      "8":"y"
    },
    "opera":{
      "9":"p",
      "9.5-9.6":"p",
      "10.0-10.1":"p",
      "10.5":"p",
      "10.6":"y",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "11.6":"y",
      "12":"y",
      "12.1":"y",
      "15":"y",
      "16":"y",
      "17":"y",
      "18":"y",
      "19":"y",
      "20":"y",
      "21":"y",
      "22":"y",
      "23":"y",
      "24":"y",
      "25":"y",
      "26":"y",
      "27":"y",
      "28":"y"
    },
    "ios_saf":{
      "3.2":"n",
      "4.0-4.1":"y",
      "4.2-4.3":"y",
      "5.0-5.1":"y",
      "6.0-6.1":"y",
      "7.0-7.1":"y",
      "8":"y",
      "8.1":"y"
    },
    "op_mini":{
      "5.0-8.0":"n"
    },
    "android":{
      "2.1":"n",
      "2.2":"y",
      "2.3":"y",
      "3":"y",
      "4":"y",
      "4.1":"y",
      "4.2-4.3":"y",
      "4.4":"y",
      "4.4.3-4.4.4":"y",
      "37":"y"
    },
    "bb":{
      "7":"y",
      "10":"y"
    },
    "op_mob":{
      "10":"p",
      "11":"y",
      "11.1":"y",
      "11.5":"y",
      "12":"y",
      "12.1":"y",
      "24":"y"
    },
    "and_chr":{
      "39":"y"
    },
    "and_ff":{
      "33":"y"
    },
    "ie_mob":{
      "10":"y",
      "11":"y"
    },
    "and_uc":{
      "9.9":"y"
    }
  },
  "notes":"",
  "notes_by_num":{
    
  },
  "usage_perc_y":93.65,
  "usage_perc_a":0,
  "ucprefix":false,
  "parent":"",
  "keywords":"onhashchange,HashChangeEvent",
  "ie_id":"",
  "chrome_id":"",
  "shown":true
}];