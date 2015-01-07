(function(){
'use strict';

var Browsercheck = function(featuresJSON, checkVersions){
   this.checkVersions = checkVersions;
   this.featuresJSON = featuresJSON;
};

Browsercheck.prototype.check = function(jsCode){

   var featuresJSON = this.featuresJSON,
       results = { passed: [], failed: [] };

   //check if trigger in code
   //check feature support against checkVersions
   //add feature details to either passed or failed object array

   for(var i = 0; i < featuresJSON.length; i++){

      var details = featuresJSON[i],
          triggers = details['triggers'];

      for(var j = 0; j < triggers.length; j++){
         var trigger = triggers[j];

         if(new RegExp(trigger+'[\'\"\(\s]').test(jsCode)){
            var support = this.checkFeatureSupported(details);

            details.foundTrigger = trigger;

            if(support.success === false){
               details.explaination = details.title+' is not supported in '+support.details.browser.name+' '+support.details.browser.version;
               details.status = 'failed';
               results.failed.push(details);
            } else if(support.success) {
               details.explaination = details.title+' is supported in all browsers you aim to support!';
               details.status = 'passed';
               results.passed.push(details);
            }

            break;
         }

      }

   }

   return results;

};

Browsercheck.prototype.checkFeatureSupported = function(featureDetails){

   var checkVersions = this.checkVersions,
       featureSupport = featureDetails.stats;

   //loop browsers
   for(var browserName in checkVersions){
      if(checkVersions.hasOwnProperty(browserName)){

         var checkVersion = checkVersions[browserName],
             versionSupport = featureSupport[browserName];

         //loop browser's versions
         for(var version in versionSupport){
            if(versionSupport.hasOwnProperty(version) && Number(version) >= checkVersion){

               //current version number is above or
               //the same as the lowest version we need to check

               if(versionSupport[version] === 'n'){
                  return {
                     success: false,
                     details: {
                        browser: {
                           name: browserName,
                           version: version
                        }
                     }
                  };
               }


            }
         }

      }
   }

   return { success: true, details: null };

};

window.Browsercheck = Browsercheck;

}());