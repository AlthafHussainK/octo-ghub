import Link from "next/link";
import Image from "next/image";

import { getUsers, getUserData } from "./lib/data";
import { UserData, User } from "./lib/definitions";

export default async function Home() {
  const data: Array<User> = await getUsers();
  let richUsersData: Array<UserData> = [];

  if (data.length) {
    richUsersData = await Promise.all(
      data.map((user: User) => getUserData(user.login))
    ).then((res) => res);
    // TODO: res => res.json() ?
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <h2>List of users from GitHub</h2>
      <div>
        {richUsersData.map((user: UserData) => (
          <div key={user.id} className="flex flex-row m-10">
            <Image
              src={user.avatar_url}
              width={100}
              height={100}
              style={{ borderRadius: "50%", marginRight: "1em" }}
              alt="Avatar Image"
            />
            {/* TODO: Refactor */}
            <Link
              href={{
                pathname: `/${user.login}`,
                // query: { keyword: user.login },
              }}
            >
              <p>
                {user.name} ({user.login})
              </p>
              <p>company: {user.company}</p>
              <p>{user.location || ""}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
