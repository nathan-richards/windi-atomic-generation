import { describe, expect, test } from "vitest";
import keyHelpers from "../scripts/keyHelpers";

describe("key", () => {
  const methods = keyHelpers();

  test("Check if special characters are stripped", () => {
    const results = [
      { input: "grid desktop", output: "griddesktop" },
      { input: "test", output: "test" },
      { input: "custom-grid", output: "customgrid" },
      { input: "600 -> 500 (90deg)", output: "60050090deg" },
    ];

    results.forEach((x) => {
      expect(methods.strip(x.input)).toBe(x.output);
    });
  });

  test("Check if hyphenated key names are generated", () => {
    const results = [
      { input: "grid desktop", output: "grid-desktop" },
      { input: "test", output: "test" },
      { input: "custom-grid", output: "custom-grid" },
      { input: "600 -> 500 (90deg)", output: "600-500-90deg" },
    ];

    results.forEach((x) => {
      expect(methods.create(x.input)).toBe(x.output);
    });
  });
});
