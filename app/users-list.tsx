import Link from "next/link";
import UserCard from "@/components/user-card";
import { getUsers } from "@/lib/data";
import { User } from "@/lib/definitions";

export default async function UsersList() {
  const data: User[] = await getUsers();

  return (
    <>
      {data?.map((user: User) => (
        <div key={user.id} className="my-2 md:m-2 2xl:m-3 ">
          <Link href={`/${user.login}`}>
            <UserCard avatarUrl={user.avatar_url} username={user.login} />
          </Link>
        </div>
      ))}
    </>
  );
}
