import BackButton from "../components/back-button";
import { getUserData } from "../lib/data";
import { UserData } from "../lib/definitions";
import ProfileCard from "../components/profile-card";

import ProfileLoading from "./loading";
import { Suspense } from "react";

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

// TODO: generateStaticParams to reduce build time as the pages will be statically generated instead of on-demand at request time

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
