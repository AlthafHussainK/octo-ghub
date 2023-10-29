import Link from "next/link";
import { getUsers, getUserData } from "./lib/data";
import { UserData, User } from "./lib/definitions";
import UserCard from "./components/UserCard";
import { LogoGithubIcon } from "@primer/octicons-react";

export default async function Home() {
  const data: User[] = await getUsers();
  let richUsersData: UserData[] = [];

  if (data.length) {
    richUsersData = await Promise.all(
      data.map((user: User) => getUserData(user.login))
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-0">
      <p className="text-xl font-extralight">
        <LogoGithubIcon size={32} /> Users
      </p>
      <div className=" my-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 ">
        {richUsersData.map((user: UserData) => (
          <div key={user.id} className="my-2 md:m-2 2xl:m-3 ">
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
