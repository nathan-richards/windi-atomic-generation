import { keyValueHelpers } from "./keyValueHelpers";

// type needs to be the multi-tiered interface
export function buildJSON(object: Object): Object {
  const keyMethods = keyValueHelpers();

  const keysToRemove = [
    "avatar user square",
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
    const newObject = {};

    // Remove unwanted keys
    const strippedObject = keyMethods.remove(object, keysToRemove);

    // Get all parent keys
    const parentKeys = keyMethods.get(strippedObject);

    parentKeys.forEach((type) => {
      newObject[type] = {};

      for (const [key, value] of Object.entries(strippedObject[type])) {
        // console.log(`${key}: ${value}`);
        const path = keyMethods.findPath(strippedObject[type], "value");
        const className = keyMethods.create(path);

        console.log(className, key, value);

        if (path === "base.white") {
          newObject[type][className] = stripXChars(
            strippedObject[type].base.white.value,
            2
          );
        }
      }

      // Get class names with findPath
      // Get value and assign

      if (type === "color") {
        // console.log("entries", Object.entries(strippedObject[type]));
        // console.log("values", Object.values(strippedObject[type]));
        // console.log("values top", Object.values(strippedObject));
        // Object.entries(strippedObject).forEach(([key, value]) => {
        //   console.log(value);
        //   //console.log(keyMethods.findPath(strippedObject[type][key], "value"));
        // });
      }
    });

    console.log(newObject);

    // Object.values(strippedObject).forEach((val) => {
    //   console.log("value = ", val);
    //   //console.log(keyMethods.findPath(val, "value"));
    // });

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
