/* 
use concurrent
run fetch then buaild
*/
import { describe, expect, test } from "vitest";
import keyHelpers from "../scripts/keyHelpers";
import { }

describe("Testing building the multi-tiered object", () => {
  const keyMethods = keyHelpers();

  

  const input = {
    color: {
      base: {
        white: {
          description: "",
          type: "color",
          value: "#ffffffff",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:a81563215bb948fb9dfd23a5e289891a4d777583,",
              exportKey: "color",
            },
          },
        },
        black: {
          description: "",
          type: "color",
          value: "#000000ff",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:4fd733c0c11bfacfe9c845cb3d697219b66fc1c6,",
              exportKey: "color",
            },
          },
        },
      },
      gray: {
        25: {
          description: "",
          type: "color",
          value: "#fcfcfdff",
          blendMode: "normal",
          extensions: {
            "orgs.lukasoppermann.figmaDesignTokens": {
              styleId: "S:98ed5d7c3684cb045710dfd9e15802c15d367cda,",
              exportKey: "color",
            },
          },
        },
        50: {
          description: "",
          type: "color",
          value: "#f9fafbff",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:38295c6bc1984974b391b3f0243317b695636ec0,",
              exportKey: "color",
            },
          },
        },
        100: {
          description: "",
          type: "color",
          value: "#f2f4f7ff",
          blendMode: "normal",
          extensions: {
            "org.lukasoppermann.figmaDesignTokens": {
              styleId: "S:92531c9f97a19f8001cac8f2f21c8ea138fcf1d2,",
              exportKey: "color",
            },
          },
        },
      },
    },
  };

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
