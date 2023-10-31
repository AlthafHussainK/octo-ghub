import { cache } from "react";

const TOKEN = process.env.GHUB_API_TOKEN;

export const getUsers = cache(async () => {
  let response = [];
  try {
    const data = await fetch("https://api.github.com/users", {
      headers: {
        accept: "application/vnd.github+json",
        authorization: `Bearer ${TOKEN}`,
      },
    });
    response = await data.json();
  } catch (err) {
    console.error(err);
  }
  return response;
});

export const getUserData = cache(async (username: string) => {
  let response = [];
  try {
    const data = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        accept: "application/vnd.github+json",
        authorization: `Bearer ${TOKEN}`,
      },
    });
    response = await data.json();
  } catch (error) {
    console.error(error);
  }

  return response;
});
