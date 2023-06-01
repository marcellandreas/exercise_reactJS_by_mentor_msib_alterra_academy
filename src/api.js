import axios from "axios";

export const client = axios.create({
  baseURL: "https://upward-primate-81.hasura.app/api/rest/article",
  headers: {
    "x-hasura-admin-secret":
      "MmC6gkXTCJUMsqk00aCedovW53C57EWZnZPz1N0yeJsZHzYu3rYPETNhDAD8ARzq",
  },
});

export const getArticles = async () => {
  const response = await client.get("/");
  return response.data._onetomany_article;
};
