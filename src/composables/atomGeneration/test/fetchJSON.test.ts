import { flushPromises } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import fetch from "node-fetch";

describe("To correctly fetch the JSON data", () => {
  test("Check contents of $url is returned as $output", async () => {
    const url =
      "http://localhost:5173/src/composables/atomGeneration/files/test.tokens.json";

    await flushPromises();

    const input = await (await fetch(url)).json();

    expect(input).toHaveProperty("color");
    expect(input).toHaveProperty("color.base");
    expect(input).toHaveProperty("color.base.white");
  });
});
