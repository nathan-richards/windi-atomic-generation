import { keyValueHelpers } from "./keyValueHelpers";

// type needs to be the multi-tiered interface
export function buildJSON(object: Object): Object {
  const keyMethods = keyValueHelpers();

  const keysToRemove = [
    "blendMode",
    "description",
    "extensions",
    "grid",
    "type",
    "typography",
  ];

  function stripXChars(str: string, amount: number): string {
    return str.slice(0, -amount);
  }

  function build(): Object {
    // Remove unwanted keys
    keyMethods.remove(object, keysToRemove);
    // Get all keys
    const parentKeys = keyMethods.get(object);

    return parentKeys;
    // Use a loop method for each parent key

    // Find how many layers the nested objects go til they hit “value”
    // Loop through nested tiers of object
    // Combine the key level “value” sits on and -1 to form the “class name”
    // If value is not object, use direct value
    // If value is object, use sub values to build up correct value

    // If color, then supply color methods
    // If font, then supply font methods

    return {};
  }

  return build();
}
