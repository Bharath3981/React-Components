"use strict";

export let baseURL = "";

if (import.meta.env.DEV) {
  baseURL =
    "https://raw.githubusercontent.com/Bharath3981/React-Components-CDN/main/";
} else {
  baseURL =
    "https://cdn.jsdelivr.net/gh/Bharath3981/React-Components-CDN@latest/";
}

//export { baseURL };
