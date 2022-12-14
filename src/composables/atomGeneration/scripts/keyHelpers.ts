interface IKeyHelpers {
  create(key: string): string;
  strip(key: string): string;
}

export default function keyHelpers(): IKeyHelpers {
  const stripRegex = /[^0-9^a-z^A-Z]/g;

  const publicAPI = {
    create,
    strip,
  };

  function create(key: string): string {
    const keyArr = key
      .split(/[- ]+/)
      .map((x) => strip(x))
      .filter((a) => a);

    return keyArr.join("-");
  }

  function strip(key: string): string {
    return key.replace(stripRegex, "");
  }

  return publicAPI;
}
