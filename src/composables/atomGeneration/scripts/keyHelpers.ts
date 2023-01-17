interface IKeyHelpers {
  create(key: string): string;
  remove(obj: Object, keys: Array<string>): Object;
  strip(key: string): string;
}

export function keyHelpers(): IKeyHelpers {
  const stripRegex = /[^0-9^a-z^A-Z]/g;

  const publicAPI = {
    create,
    remove,
    strip,
  };

  // Creates the key by removing any special characters
  // Replaces any spaces with hyphens
  // Output is a joined kebab cased key names
  function create(key: string): string {
    const keyArr = key
      .split(/[- ]+/)
      .map((x) => strip(x))
      .filter((a) => a);

    return keyArr.join("-");
  }

  // Removes keys from an object
  // Pass in an array of keys to remove
  // Works for nested objects too
  function remove(obj: Object, keys: Array<string>): Object {
    if (typeof obj === "object" && obj !== null) {
      return Object.keys(obj).reduce((previousValue, key) => {
        return keys.includes(key)
          ? previousValue
          : { ...previousValue, [key]: remove(obj[key], keys) };
      }, {});
    }

    return obj;
  }

  // Replaces special characters
  // Based on a regex supplied to the method
  function strip(key: string): string {
    return key.replace(stripRegex, "");
  }

  return publicAPI;
}
