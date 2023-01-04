import { describe, expect, test } from "vitest";
import keyHelpers from "../scripts/keyHelpers";

describe("key", () => {
  const methods = keyHelpers();

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
});
