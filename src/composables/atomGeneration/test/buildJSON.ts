import { describe, expect, test } from "vitest";
import { keyValueHelpers } from "../scripts/keyValueHelpers";
import tokens from "../files/test.tokens.json" assert { type: "json" };
import { buildJSON } from "../scripts/buildJSON";

describe("Testing building the multi-tiered object", () => {
  const keyMethods = keyValueHelpers();

  const input = buildJSON(tokens);

  const output = {
    theme: {
      extend: {
        color: {
          "base-white": "#ffffffff",
          "base-black": "#ffffffff",
          "gray-25": "#fcfcfdff",
          "gray-50": "#f9fafbff",
          "gray-100": "#f2f4f7ff",
        },
      },
    },
  };

  test("Check contents of $input is returned as $output", () => {
    expect(input).toBe(output);
  });
});
