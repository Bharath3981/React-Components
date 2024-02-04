"use strict";

export let baseURL = "";
export const jsonPlaceHolderBaseURL = "https://jsonplaceholder.typicode.com/";

if (import.meta.env.DEV) {
  baseURL =
    /*"http://127.0.0.1:5500/";*/ "https://raw.githubusercontent.com/Bharath3981/React-Components-CDN/main/";
} else {
  baseURL =
    "https://cdn.jsdelivr.net/gh/Bharath3981/React-Components-CDN@latest/";
}

export const fetchData = async (url: string) => {
  const req = await fetch(baseURL + url);
  return await req.json();
};

//export { baseURL };
