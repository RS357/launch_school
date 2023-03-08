class Clock {
  static MINS_IN_DAY = 24 * 60;
  static MINS_IN_HOUR = 60;
  static instanceCollection = {};

  static at(hours, minutes = 0) {
    let minsTotal = (hours * Clock.MINS_IN_HOUR) + minutes;
    let newInstance = new Clock(minsTotal);
    let instanceCollectionKey = newInstance.toString();
    if (Clock.instanceCollection.hasOwnProperty(instanceCollectionKey)) {
      return Clock.instanceCollection[instanceCollectionKey];
    } else {
      Clock.instanceCollection[instanceCollectionKey] = newInstance;
      return newInstance;
    }
  }

  constructor(minutes) {
    this.minutes = minutes;
  }

  toString() {
    let hours = Math.floor(this.minutes / Clock.MINS_IN_HOUR);
    let minsMinusHours = this.minutes % Clock.MINS_IN_HOUR;

    if (String(hours).length === 1) {
      hours = `0${hours}`;
    }

    if (String(minsMinusHours).length === 1) {
      minsMinusHours = `0${minsMinusHours}`;
    }
    return `${hours}:${minsMinusHours}`;
  }

  add(newMins) {
    let currentMins = this.minutes + newMins;
    while (currentMins > Clock.MINS_IN_DAY) {
      currentMins -= Clock.MINS_IN_DAY;
    }
    return new Clock(currentMins);
  }

  subtract(subtractMins) {
    let currentMins = this.minutes - subtractMins;
    while (currentMins < 0) {
      currentMins += Clock.MINS_IN_DAY;
    }
    return new Clock(currentMins);
  }

  isEqual(instance) {
    return this === instance;
  }
}

/*eslint-disable*/
/*
class clock:

static instanceCollection, object 
  store instances by time in minutes as key and instance as value


instance method isEqual // given instance 
  return true if instance is equal to this else false 
  
static variable MINS_IN_DAY, MINS_IN_HOUR, 

static method at //given hours and optional argument minutes (minutes default argument is 0) 
  set minsTotal variable to hours * 60 + minutes 
  return minsTotal

constructor // given minutes 
  set instance variable minutes to minutes 

instance toString: 
  set hours to the floored val of dividing instance minutes  by MINS_IN_HOUR 
  set minsMinusHours to remainder of dividing instance minutes by MINS_IN_HOUR
  add 0 to front of both minsMinusHours and hours if they are one digit
  return string formatted with HOURS and minsMinusHours

instance add: // newMins 
  increment instance variable minutes by newMins
  
static method at // given hours and minutes:
  create variavle minsTotal and set it to total of minutes of hours and minutes passed in
  create variable newInstance and set it to new instance of Clock with minsTotal passed in
  set variable instanceCollectionKey to return value of calling toString on newInstance
  if newInstance is not in instanceCollection (look via instanceCollectionKey): 
    return new Instance 
  else:
    add newInstance to instanceCollection with its key as instanceCollectionKey
    return instance in instanceCollection

static method subtract:
  decrement instance variable minutes by newMins

Problem: Write a class Clock that has the following methods:
static at
  input one or two integers
  output: instance of clock
instance add
  input: one integer
  output: instance of clock
instance toString
  input - no input
  output: A string representation of the time in 24 hour format e.g "01:30". ALWAYS two digits either side of colon.
instance subtract
  input: an integer
  output: instance of clock

Rules:
  Don't mutate clock objects when adding and subtracting minutes - return a new clock object DONE
  Two clock objects that represent the same time should be equal to each other i.e. the same object DONE
  Don't use any built-in date or time functionality - just arithmetic operations DONE
  After 60 minutes the hour increments/decrements  DONE 
  If '0' is passed to the at method, set the clock instance to midnight DONE
  If a number greater than 60 is added to add, increment by an hour and deduct 60 from the number 
    passed to add  DONE 
  If you pass more than a day's worth of minutes to the add method, it rolls over to the next day  
*/
// let t = Clock.at(8).toString();
// console.log(t);

module.exports = Clock;