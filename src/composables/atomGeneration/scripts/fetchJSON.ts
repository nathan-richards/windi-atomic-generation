export async function fetchJSON(url: string): Promise<unknown> {
  if (url) {
    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        if (data != null) {
          return data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return;
}
