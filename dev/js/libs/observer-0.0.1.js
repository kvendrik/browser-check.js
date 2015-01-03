/*
* Observer.js - A teeny tiny library to listen for object changes
* http://github.com/kvendrik/Observer.js
*/

var Observer = function(obj){
  this[0] = obj;
  this.listeners = {};
};

Observer.prototype.set = function(){
  var obj = this[0],
      firstArg = arguments[0],
      changes = { add: [], update: [] },
      oldVal,
      type,
      changeDetails;

  //changes or adds a property
  //and stores the details of the change
  var changeProp = function(prop, newVal){
    if(obj[prop] !== newVal){
      //if it is indeed a change

      //store the current value
      oldVal = obj[prop];

      //get type change type
      type = obj[prop] === undefined ? 'add' : 'update';

      //change the property to its new value
      obj[prop] = newVal;

      //create the change details
      changeDetails = {
         name: prop,
         object: obj,
         type: type
      };

      if(oldVal){
        //if we have an old value
        //and its theirfor not an add
        changeDetails.oldVal = oldVal;
      }

      //push the current change into the
      //array of changes
      changes[type].push(changeDetails);

    }
  };

  if(typeof firstArg === 'object'){
    //multiple changes
    var objChanges = firstArg;

    //loop all changes
    for(var prop in objChanges){
      changeProp(prop, objChanges[prop]);
    }

  } else if(typeof firstArg === 'string' || typeof firstArg === 'number'){
    //single change
    changeProp(firstArg, arguments[1]);
  }

  if(changes.add.length > 0 || changes.update.length > 0){
    //if there were indeed changes

    //trigger the global change event
    this.triggerEvent('change', changes.add.concat(changes.update));

    if(changes.add.length > 0){
      //if there were additions, trigger the add event
      this.triggerEvent('add', changes.add);
    }

    if(changes.update.length > 0){
      //if there were updates, trigger the add event
      this.triggerEvent('update', changes.update);
    }

  }

  return this;
};

Observer.prototype.delete = function(){
  var obj = this[0],
      changes = [],
      oldVal;

  for(var i = 0; i < arguments.length; i++){
    //loop given properties

    var prop = arguments[i];

    //if current prop exists
    if(obj[prop]){

      //store old value
      oldVal = obj[prop];

      //delete prop
      delete obj[prop];

      //store details
      changes.push({
        name: prop,
        object: obj,
        type: 'delete',
        oldVal: oldVal
      });

    }
  }

  if(changes.length > 0){
    //if there were changes

    this.triggerEvent('change', changes);
    this.triggerEvent('delete', changes);
  }

  return this;
};

Observer.prototype.on = function(event, callback){
  this.listeners[event] = callback;
  return this;
};

Observer.prototype.triggerEvent = function(event, data){
  var listeners = this.listeners;

  if(listeners[event]){
    listeners[event](data);
  }

  return this;
};