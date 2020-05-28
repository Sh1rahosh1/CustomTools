// var assert = require("assert");

import { expect } from "chai";

import { testFun, isDeepEqual } from "../src/index";
import "mocha";


describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present ! !", function () {
      expect(-1).to.equal([1, 2, 3].indexOf(4));
    });

    it("should return test when call testFun", () => {
      expect(testFun()).equal("test");
    });
    it("should pending if two object is deepEqual", () => {
      const a = 1;
      const b = 1;
      const result = isDeepEqual(a, b)
      expect(result).equal(true);
    });
  });
});
