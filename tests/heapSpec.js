'use strict';
var should = require('chai').should();
var Heap = require('../index.js').Heap;

describe('Heap', function(){

  var exHeap;
  beforeEach(function(){
    exHeap = new Heap();
  });

  it('should be a function', function(){
    (typeof Heap).should.equal('function');
  });

  it('should have a getMin function', function(){
    (typeof exHeap.getMin).should.equal('function');
  });

  it('should have an insert method', function(){
    (typeof exHeap.insert).should.equal('function');
    exHeap.insert(1);
    (exHeap.getMin()).should.equal(1);
    exHeap.insert(2);
    exHeap.insert(0);
    (exHeap.getMin()).should.equal(0);
    exHeap.insert(-1);
    (exHeap.getMin()).should.equal(-1);
    exHeap.insert(5);
  });

  it('should have a deleteMin method', function(){
    (typeof exHeap.deleteMin).should.equal('function');
    exHeap.insert(1);
    exHeap.insert(0);
    exHeap.insert(15);
    exHeap.insert(-1);
    (exHeap.deleteMin()).should.equal(-1);
    (exHeap.deleteMin()).should.equal(0);
  });

  it('should have a heapSort method', function(){
    (typeof exHeap.heapSort).should.equal('function');
    (exHeap.heapSort([3,2,1,4,6,5,7])).should.deep.equal([1,2,3,4,5,6,7]);
    (exHeap.heapSort([-50,22,13,1,50,21,103])).should.deep.equal([-50,1,13,21,22,50,103]);
  });

});