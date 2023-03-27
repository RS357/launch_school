class CustomSet {
  constructor(arr = []) {
    this.setCollection = arr.slice();
  }

  isEmpty() {
    return this.setCollection.length === 0;
  }

  contains(val) {
    return this.setCollection.includes(val);
  }

  isSubset(anotherCustomSet) {
    if (this.setCollection.length === 0) {
      return true;
    } else if (anotherCustomSet.isEmpty()) {
      return false;
    } else {
      return this._every(val => anotherCustomSet.contains(val));
    }
  }

  _getCollection() {
    return this.setCollection.slice();
  }

  _every(callback) {
    for (let idx = 0; idx < this.setCollection.length; idx += 1) {
      if (!callback(this.setCollection[idx])) {
        return false;
      }
    }
    return true;
  }

  _forEach(callback) {
    this.setCollection.forEach(callback);
  }

  _some(callback) {
    for (let idx = 0; idx < this.setCollection.length; idx += 1) {
      if (callback(this.setCollection[idx])) {
        return true;
      }
    }
    return false;
  }

  _identicalSet(set2) {
    return this._every(val => set2.contains(val)) &&
    set2._every(val => this.contains(val));
  }

  _noSharedElements(set2) {
    return this._every(val => !set2.contains(val)) &&
    set2._every(val => !this.contains(val));
  }

  _getIntersection(set2) {
    let intersectionVals = [];
    this._forEach(val => {
      if (set2.contains(val)) {
        if (!intersectionVals.includes(val)) {
          intersectionVals.push(val);
        }
      }
    });
    set2._forEach(val => {
      if (this.contains(val)) {
        if (!intersectionVals.includes(val)) {
          intersectionVals.push(val);
        }
      }
    });
    return intersectionVals;
  }

  isDisjoint(anotherCustomSet) {
    if (this.isEmpty()) {
      return true;
    } else if (anotherCustomSet.isEmpty()) {
      return true;
    } else if (this._some(val => anotherCustomSet.contains(val))) {
      return false;
    } else if (anotherCustomSet._some(val => this.contains(val))) {
      return false;
    } else return true;
  }

  isSame(anotherCustomSet) {
    if (this.isEmpty() && anotherCustomSet.isEmpty()) {
      return true;
    } else if (this.isEmpty() || anotherCustomSet.isEmpty()) {
      return false;
    } else if (this._identicalSet(anotherCustomSet)) {
      return true;
    } else return false;
  }

  add(number) {
    if (!this.contains(number)) {
      this.setCollection.push(number);
    }
    return this;
  }

  intersection(anotherCustomSet) {
    if (this.isEmpty() || anotherCustomSet.isEmpty()) {
      return new CustomSet();
    } else if (this._noSharedElements(anotherCustomSet)) {
      return new CustomSet();
    } else {
      let intersectionVals = this._getIntersection(anotherCustomSet);
      return new CustomSet(intersectionVals);
    }
  }

}

/*eslint-disable*/
/*
class CustomSet
  instance methods:
    intersection // given anotherCustomSet 
      if either set is empty (or):
        return true
      else if this set has no shared elements with anotherCustomSet 
        return empty array 
      else if they share elements:
        return an array of those shared elements
       
      

    isSame // given newCustomSEt
      if this set is empty and newCustomSet is empty:
        return true
      else if set is empty or newCustomSet is empty:
        return false
      else if 
      

    isDisjoint // given newCustomSet
      if instance property setCollection is empty:
        return true
      else if setCollection of newCustomSet is empty:
        return true

    isSubSet // anotherSet
      if setColletion length is 0:
         return true 
      else if anotherSet length is 0:
        return false
      else if all vals in setCollection are in setCollection of anotherSet:
        return true

    contains// given num
      returns true if num is in setCollection
    isEmpty
      returns true if instance property setCollection is empty 

  constructor: // given arr
    set setCollection to copy of arr
  instance properties:
    declare empty array, setCollection
*/

let set = new CustomSet([1, 2]);
console.log(set._noSharedElements(new CustomSet([3, 4])));


module.exports = CustomSet;