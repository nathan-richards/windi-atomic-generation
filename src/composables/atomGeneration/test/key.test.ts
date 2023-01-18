import { describe, expect, test } from "vitest";
import testTokens from "../files/test.tokens.json" assert { type: "json" };
import untitledTokens from "../files/untitled-design-tokens.tokens.json" assert { type: "json" };
import { keyValueHelpers } from "../scripts/keyValueHelpers";

describe("Key generation with stripping characters and adding hyphens", () => {
  const methods = keyValueHelpers();

  const keysToRemove = [
    "avatar-user-square",
    "blendMode",
    "description",
    "extensions",
    "type",
  ];

  const keyResults = [
    {
      input: "grid desktop",
      concatOutput: "griddesktop",
      finalOutput: "grid-desktop",
    },
    {
      input: "grid.desktop",
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

  const parentKeysResult = ["color"];

  test.each(keyResults)(
    "Check $input is concatinated to $concatOutput",
    ({ input, concatOutput }) => {
      expect(methods.strip(input)).toBe(concatOutput);
    }
  );

  test.each(keyResults)(
    "Check $input is hyphenated to $finalOutput",
    ({ input, finalOutput }) => {
      expect(methods.create(input)).toBe(finalOutput);
    }
  );

  test.each(keysToRemove)(
    "Check keys ($keysToRemove) aren't in the object",
    (key) => {
      expect(methods.remove(testTokens, keysToRemove)).not.toEqual(
        expect.objectContaining({ [key]: expect.anything() })
      );
    }
  );

  test("Checking that the get method, outputs a string array containing 'color'", () => {
    expect(methods.get(testTokens)).toEqual(["color"]);
    expect(methods.get(testTokens)).not.toContain(["base"]);

    expect(methods.get(untitledTokens)).toEqual(
      expect.arrayContaining([
        "color",
        "effect",
        "font",
        "gradient",
        "grid",
        "typography",
      ])
    );
  });
});
