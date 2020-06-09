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
    it("should return true when given two null", () => {
      const a = null;
      const b = null;
      const result = isDeepEqual(a, b);
      expect(result).equal(true);
    });

    it("should return true when given two same object only contains fundamental type", () => {
      const a = { a: "a", b: 1, c: undefined, d: true };
      const b = { a: "a", b: 1, c: undefined, d: true };
      const result = isDeepEqual(a, b);
      expect(result).equal(true);
    });
    it("should return false when given two different object only contains fundamental type", () => {
      const a = { a: "a", b: 1, c: undefined, d: false };
      const b = { a: "a", b: 1, c: undefined, d: true };
      const result = isDeepEqual(a, b);
      expect(result).equal(false);
    });
    it("should return true when given two same object contains Array", () => {
      const a = { a: "a", b: 1, c: undefined, d: [true, "1", 1] };
      const b = { a: "a", b: 1, c: undefined, d: [true, "1", 1] };
      const result = isDeepEqual(a, b);
      expect(result).equal(true);
    });
    it("should return true when given two different object contains Array", () => {
      const a = { a: "a", b: 1, c: undefined, d: [true, "1", 3] };
      const b = { a: "a", b: 1, c: undefined, d: [true, "1", 1] };
      const result = isDeepEqual(a, b);
      expect(result).equal(false);
    });

    it("should return true when given two same object with object nested", () => {
      const a = { a: "a", b: 1, c: undefined, d: {a:'a',b: 1, c: undefined} };
      const b = { a: "a", b: 1, c: undefined, d: {a:'a',b: 1, c: undefined} };
      const result = isDeepEqual(a, b);
      expect(result).equal(true);
    });
  });

  // describe("specialFlagRegExp function", () => {
  //   it("should return str between flags", () => {
  //     const result = specialFlagRegExp("初音宇宙第一可爱", "初音", "可爱");
  //     expect(result.targetSpecial).equal("宇宙第一");
  //   });

  //   it("should return str with two flags", () => {
  //     const result = specialFlagRegExp("初音宇宙第一可爱", "初音", "可爱");
  //     expect(result.otherStr).equal("初音宇宙第一可爱");
  //   });
  // });
});
