import Image from "next/image";
import BackButton from "../components/BackButton";
import { getUserData } from "../lib/data";
import { UserData } from "../lib/definitions";
import ProfileCard from "../components/ProfileCard";

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

      {/* <Image
        src={userData.avatar_url}
        width={100}
        height={100}
        style={{ borderRadius: "50%", marginRight: "1em" }}
        alt="Avatar Image"
      />
      <p>{userData.login}</p>
      <p>{userData.avatar_url}</p>
      <p>{userData.location}</p>
      <p>{userData.company}</p>
      <p>{userData.followers}</p>
      <p>{userData.following}</p>
      <p>{userData.public_repos}</p>
      <p>{userData.bio}</p> */}
    </>
  );
}
