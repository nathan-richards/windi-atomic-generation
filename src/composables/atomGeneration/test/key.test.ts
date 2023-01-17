import { describe, expect, test } from "vitest";
import tokens from "../files/test.tokens.json" assert { type: "json" };
import { keyHelpers } from "../scripts/keyHelpers";

describe("Key generation with stripping characters and adding hyphens", () => {
  const methods = keyHelpers();

  const keysToRemove = [
    "avatar-user-square",
    "blendMode",
    "description",
    "extensions",
    "type",
  ];

  const results = [
    {
      input: "grid desktop",
      concatOutput: "griddesktop",
      finalOutput: "grid-desktop",
    },
    { input: "test", concatOutput: "test", finalOutput: "test" },
    {
      input: "custom-grid",
      concatOutput: "customgrid",
      finalOutput: "custom-grid",
    },
    {
      input: "600 -> 500 (90deg)",
      concatOutput: "60050090deg",
      finalOutput: "600-500-90deg",
    },
  ];

  test.each(results)(
    "Check $input is concatinated to $concatOutput",
    ({ input, concatOutput }) => {
      expect(methods.strip(input)).toBe(concatOutput);
    }
  );

  test.each(results)(
    "Check $input is hyphenated to $finalOutput",
    ({ input, finalOutput }) => {
      expect(methods.create(input)).toBe(finalOutput);
    }
  );

  test.each(keysToRemove)(
    "Check keys ($keysToRemove) aren't in the object",
    (key) => {
      expect(methods.remove(tokens, keysToRemove)).not.toEqual(
        expect.objectContaining({ [key]: expect.anything() })
      );
    }
  );
});
