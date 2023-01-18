// import { fetch } from 'node-fetch'; needed when running tests

export async function fetchJSON(url: string): Promise<unknown> {
  if (!url) return "No URL";

  return await fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
