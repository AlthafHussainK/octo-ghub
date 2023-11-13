import { Suspense } from "react";
import BackButton from "@/components/back-button";
import { getUserData, getUsers } from "@/lib/data";
import { User, UserData } from "@/lib/definitions";
import ProfileCard from "@/components/profile-card";
import ProfileLoading from "@/[username]/loading";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const userData: UserData = await getUserData(username);

  return {
    title: `${userData.name} (${userData.login})`,
  };
}

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user: User) => ({
    username: user.login,
  }));
}

export default async function List({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const userData: UserData = await getUserData(username);

  return (
    <>
      <BackButton />
      <Suspense fallback={<ProfileLoading />}>
        <ProfileCard
          fullname={userData.name}
          username={userData.login}
          avatarUrl={userData.avatar_url}
          bio={userData.bio}
          location={userData.location}
          followers={userData.followers}
          following={userData.following}
          repos={userData.public_repos}
          twitter={userData.twitter_username}
          company={userData.company}
        />
      </Suspense>
    </>
  );
}
