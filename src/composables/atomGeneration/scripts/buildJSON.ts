import tokens from "../files/test.tokens.json" assert { type: "json" };

interface IJSONHelpers {
  create(object: Object): Object;
}

// type needs to be the multi-tiered interface
export function buildJSON(object: Object): IJSONHelpers {
  const keysToRemove = ["blendMode", "description", "extensions", "type"];

  const publicAPI = {
    create,
  };

  function removeKeys(object: Object): Object {
    for (let i = 0; i < keysToRemove.length; i++) {
      delete object[keysToRemove[i]];
    }
    return object;
  }

  function stripXChars(str: string, amount: number): string {
    return str.slice(0, -amount);
  }

  function create(object: Object) {
    // recursive function
    // loop through key value
    // create parent key > subKey
    // map value - look for value
    // if value doesn't exist, add as tier
    // else assign value
    // if value is not object assign and end
    // else format value based on type (unique methods)

    let prevObject = {};
    const newObject = {};
    let objectToFormat = removeKeys(object);
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
          console.log(colorKey, subKey);
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

  return publicAPI;
}
