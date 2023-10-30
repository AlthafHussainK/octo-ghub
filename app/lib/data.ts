const TOKEN = process.env.GHUB_API_TOKEN;

export async function getUsers() {
  const res = await fetch("https://api.github.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getUserData(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return res.json();
}
