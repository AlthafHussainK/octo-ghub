import Image from "next/image";
import BackButton from "../components/BackButton";
import { getUserData } from "../lib/data";
import { UserData } from "../lib/definitions";

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
    <div>
      <BackButton />
      <h2>server rendered {params.username}</h2>

      <h2>Profile of {userData.name}</h2>
      <Image
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
      <p>{userData.bio}</p>
    </div>
  );
}
