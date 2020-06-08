// var assert = require("assert");

import { expect } from "chai";

import { testFun, isDeepEqual, specialFlagRegExp } from "../src/index";
import "mocha";

describe("index", function () {
  describe("test function", function () {
    it("should return -1 when the value is not present ! !", function () {
      expect(-1).to.equal([1, 2, 3].indexOf(4));
    });

    it("should return test when call testFun", () => {
      expect(testFun()).equal("test");
    });
  });

  describe("isDeepEqual function", () => {
    it("should pending if two object is deepEqual", () => {
      const a = null;
      const b = null;
      const result = isDeepEqual(a, b);
      expect(result).equal(true);
    });
  });

  describe("specialFlagRegExp function", () => {
    it("should return str between flags", () => {
      const result = specialFlagRegExp("初音宇宙第一可爱", "初音", "可爱");
      expect(result.targetSpecial).equal("宇宙第一");
    });

    it("should return str with two flags", () => {
      const result = specialFlagRegExp("初音宇宙第一可爱", "初音", "可爱");
      expect(result.otherStr).equal("初音宇宙第一可爱");
    });
  });
});
