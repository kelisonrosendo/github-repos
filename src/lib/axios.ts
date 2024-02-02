import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "token " + "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",
  },
});
