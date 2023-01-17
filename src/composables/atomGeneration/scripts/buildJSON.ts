import { keyHelpers } from "../scripts/keyHelpers";

// type needs to be the multi-tiered interface
export function buildJSON(object: Object): Object {
  const keyMethods = keyHelpers();

  const keysToRemove = ["blendMode", "description", "extensions", "type"];

  function stripXChars(str: string, amount: number): string {
    return str.slice(0, -amount);
  }

  function create(object: Object) {
    // Get all keys

    // Use a method for each key

    // Find how many layers the nested objects go til they hit “value”

    // Loop through nested tiers of object

    // Combine the key level “value” sits on and -1 to form the “class name”

    // If value is not object, use direct value

    // If value is object, use sub values to build up correct value

    // If color, then supply color methods
    // If font, then supply font methods

    let prevObject = {};
    const newObject = {};
    let objectToFormat = keyMethods.remove(object, keysToRemove);
    let iterations = 0;

    for (const [key, value] of Object.entries(objectToFormat)) {
      // if first iteration, use parent key for style type
      if (iterations === 0) {
        newObject[key] = {};
      } else {
        // if parent - iterations === 'color' do this,
      }
      objectToFormat = value;
      iterations++;
    }

    return newObject;

    /*
    for (const [key, value] of Object.entries(properties)) {
      if (key === "color") {
        newTheme.theme.extend.color = {};

        for (const [colorKey, colorValue] of Object.entries(value)) {
          const subKey = keyMethods.create(colorKey);
          newTheme.theme.extend.color[subKey] = colorValue;
        }
        console.log(newTheme);
        return;
      }
    }
*/
    if (
      Object.entries(objectToFormat).length > 0 &&
      prevObject !== objectToFormat
    ) {
      create();
    } else {
      return;
    }
  }

  function build(): Object {
    // Remove unwanted keys
    keyMethods.remove(object, keysToRemove);
    // Get all keys
    const parentKeys = Object.keys(object);

    return keys;
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
