import Link from "next/link";
import UserCard from "@/components/user-card";
import { getUsers, getUserData } from "@/lib/data";
import { UserData, User } from "@/lib/definitions";

export default async function UsersList() {
  const data: User[] = await getUsers();
  let richUsersData: UserData[] = [];

  if (data.length) {
    richUsersData = await Promise.all(
      data.map((user: User) => getUserData(user.login))
    );
  }
  return (
    <>
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
    </>
  );
}
