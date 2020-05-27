"use strict";

var _index = require("../src/index");

var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present ! !', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
    it('should return test when call testFun', () => {
      assert.equal((0, _index.testFun)(), "test");
    });
  });
});