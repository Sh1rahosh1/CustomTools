import { expect } from "chai";
import "mocha";
import { flat } from "../src/array";

describe("array", () => {
  describe("flat function", () => {
    it("should flat a nested array ", () => {
      const testArray = ["a", "b", ["c", "d", ["e", "f"]], "g"];

      const result = flat(testArray);
      expect(result).deep.equal(['a','b','c','d','e','f','g']);
    });
  });
});
