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

  _getDifference(set2) {
    let differenceVals = [];
    this._forEach(val => {
      if (!set2.contains(val)) {
        if (!differenceVals.includes(val)) {
          differenceVals.push(val);
        }
      }
    });

    return differenceVals;
  }

  difference(anotherCustomSet) {
    if (this.isEmpty()) {
      return new CustomSet();
    } else {
      let differenceVars = this._getDifference(anotherCustomSet);
      return new CustomSet(differenceVars);
    }
  }

  _getUnion(anotherCustomSet) {
    let unionVals = [];
    this._forEach(val => {
      if (!unionVals.includes(val)) {
        unionVals.push(val);
      }
    });
    anotherCustomSet._forEach(val => {
      if (!unionVals.includes(val)) {
        unionVals.push(val);
      }
    });
    return unionVals;
  }

  union(anotherCustomSet) {
    if (this.isEmpty() && anotherCustomSet.isEmpty()) {
      return new CustomSet();
    } else if (this.isEmpty()) {
      return anotherCustomSet;
    } else if (anotherCustomSet.isEmpty()) {
      return this;
    } else {
      let difference = this._getUnion(anotherCustomSet);
      return new CustomSet(difference);
    }
  }

}

/*eslint-disable*/
/*
difference // given anotherCustomSet
  if this CustomSet or anotherCustomSet is empty:
    return this CustomSet instance
  else: 
    set differenceVars variable to returned value of _getDifference method (passed this set and anotherCustomSet)
    return difference instantiated as val to new CustomSet
*/


module.exports = CustomSet;