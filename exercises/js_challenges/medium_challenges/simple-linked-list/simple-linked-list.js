class Element {
  constructor(...args) {
    this.data = args[0];
    this.nextNode = null;
    if (args.length === 2) {
      if (args[1] instanceof Element) {
        this.nextNode = args[1];
      }
    }
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextNode === null;
  }
  next() {
    return this.nextNode;
  }
}

class SimpleLinkedList {
  constructor() {
    this.headNode = null;
  }

  static fromArray(arr) {
    let newLinkedList = new SimpleLinkedList();
    if (arr === null || arr.length === 0) {
      return newLinkedList;
    }
    arr.slice().reverse().forEach(val => newLinkedList.push(val));
    return newLinkedList;
  }

  size() {
    let counter = 0;
    let currentNode = this.head();
    while (currentNode !== null) {
      counter += 1;
      currentNode = currentNode.next();
    }
    return counter;
  }

  isEmpty() {
    return this.size() === 0;
  }
  push(val) {
    let element = new Element(val, this.head());
    this.headNode = element;
  }

  peek() {
    if (this.headNode === null) return null;
    return this.headNode.datum();
  }

  head() {
    return this.headNode;
  }

  pop() {
    let datum = this.peek();
    this.headNode = this.head().next();
    return datum;
  }

  toArray() {
    if (this.head() === null) return [];
    let arr = [];
    let currentNode = this.head();
    while (currentNode !== null) {
      arr.push(currentNode.datum());
      currentNode = currentNode.next();
    }
    return arr;
  }

  reverse() {
    let datumArr = this.toArray();
    let reversedDatumArr = datumArr.reverse();
    return SimpleLinkedList.fromArray(reversedDatumArr);
  }

}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let list = SimpleLinkedList.fromArray(data);
// console.log(list.reverse().toArray());
data.reverse();
console.log(data);
module.exports = {
  Element,
  SimpleLinkedList
};

/*
/*eslint-disable*/
/*
Algo:

class SimpleLinkedList:
  instance identifiers:

    function reverse: 
      assign result of calling toArray on this instance, datumArr,
      reverse datumArr, reversedDatumArr
      return new simplelinkedlist object by passing reversedDatumArr to fromArray and returning what it returns

    function toArray:
      if instance property listSize is 0 return empty array  


    function pop:
      assign instane property headNode to variable, currentHeaDNode
      if instance property listSize is 1:
        assign headNode to null
        assign listSize to 0
        return currentHeadNode datum method return val
      else:
        assign instance headNode property to returned value of calling next on object
          assigned to instance headNode property 
          decrement listSize instance property by 1
        return result of calling datum on currentHeadode

    function head 
      return instance property headNode

    function push // given val
      create new Element instance, with val as arg passed in, element 
      if headnode is not null:
        assign element's next property to value assigned to headNode 
      assign headNode to element
      increment instance property listSize by 1 

    property headNode - assign to null

    property size

    function size 
      return instnace property size

    function isEmpty 
      return true if instance property size is 0

    function size 

    function peek 
      if instance property instance property headNode is null return null
      call datum instance method on instance property headNode and return result.

    function pop
    function toArray
    function reverse



class Element: 

  instance identifiers:
    property data (first arg to constructor)

    property nextNode - assigned to null

    function datum 
      output: instance property datum

    functtion isTail
      return true if nextNode is null

    function next 
      return nextNode instance property

    function constructor: // given args
      if only 1 value in args
        assigns datum instance property to the arg
      else if more than 1 value in args:
        set instance property next to be the arg that is an instance of element 
        assigns datum instance property to arg that is not instance of element 


  static identifiers:

  Problem: Write a class that implements a linked list.

Rules:
  Each 'element' contains data and a next field pointing to the next element in the linked list 
*/