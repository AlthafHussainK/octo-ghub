import Link from "next/link";

import { getUsers, getUserData } from "./lib/data";
import { UserData, User } from "./lib/definitions";
import UserCard from "./components/UserCard";

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
      <div className="w-10/12 mt-4 flex flex-row flex-wrap justify-center">
        {richUsersData.map((user: UserData) => (
          <div key={user.id} className="w-2/5 m-2 ">
            <Link href={`/${user.login}`}>
              <UserCard
                avatarUrl={user.avatar_url}
                fullname={user.name}
                username={user.login}
                location={user.location}
                company={user.company}
                bio={user.bio}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
