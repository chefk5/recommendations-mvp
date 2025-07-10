import * as contentful from "contentful";

const SPACE_ID = process.env.EXPO_PUBLIC_CONTENTFUL_SPACE_ID || "";
const ACCESS_TOKEN = process.env.EXPO_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "";

export const client = contentful.createClient({
  space: SPACE_ID,
  environment: "master", // defaults to 'master' if not set
  accessToken: ACCESS_TOKEN,
});
