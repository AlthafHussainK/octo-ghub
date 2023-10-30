import { Suspense } from "react";
import { LogoGithubIcon } from "@primer/octicons-react";
import UsersList from "@/users-list";
import UsersListSkeleton from "@/components/users-list-skeleton";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-0">
      <p className="text-xl font-extralight">
        <LogoGithubIcon size={32} /> Users
      </p>
      <div className="shadow my-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 ">
        <Suspense fallback={<UsersListSkeleton />}>
          <UsersList />
        </Suspense>
      </div>
    </div>
  );
}
