import {
  LocationIcon,
  OrganizationIcon,
  PeopleIcon,
  RepoIcon,
} from "@primer/octicons-react";
import Image from "next/image";
import TwitterIcon from "./TwitterIcon";

interface ProfileCardProps {
  fullname: string;
  username: string;
  avatarUrl: string;
  bio: string;
  location: string;
  company: string;
  twitter: string;
  repos: number;
  following: number;
  followers: number;
}
const cardBackground =
  "drop-shadow-md bg-black/20 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80  border-gray-600 border rounded-lg";

export default function ProfileCard(props: ProfileCardProps) {
  const {
    fullname,
    username,
    bio,
    followers,
    following,
    location,
    company,
    twitter,
    repos,
    avatarUrl,
  } = props;

  return (
    <div className="md:w-10/12 lg:w-[50rem] sm:mx-auto mx-0 ">
      <div className="flex justify-center relative z-10 ">
        <Image
          style={{
            borderRadius: "50%",
            border: "1px rgb(55 65 81) solid",
            boxShadow: "0 0 10px 1px rgba(0, 0, 0, .25)",
          }}
          src={avatarUrl}
          width={250}
          height={250}
          alt="Avatar"
        />
      </div>
      <div
        className={`${cardBackground} text-center md:px-10 pb-12 space-y-2 pt-[100px] relative top-[-80px]`}
      >
        <p className="text-2xl font-bold">{fullname}</p>
        <p className="text-lg font-semibold text-slate-400">{username}</p>
        <p className="text-base">{bio}</p>

        <div className="flex flex-row justify-center gap-x-2 items-center">
          <PeopleIcon size={22} />
          <p>{followers} followers</p>
          <span className="rounded-full w-1 h-1 my-auto bg-white"></span>
          <p>{following} following</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap mx-12 space-y-4 items-center">
          {location && (
            <div className="flex flex-row sm:w-1/2 justify-center mt-4">
              <LocationIcon size={22} />
              <p className="text-base ml-2">{location}</p>
            </div>
          )}
          {company && (
            <div className="flex flex-row sm:w-1/2 justify-center items-center">
              <OrganizationIcon size={22} />
              <p className="text-base  ml-2">{company}</p>
            </div>
          )}
          {twitter && (
            <div className="flex flex-row sm:w-1/2 justify-center fill-white">
              <TwitterIcon width={22} height={22} fill={"inherit"} />
              <p className="text-base ml-2">@{twitter}</p>
            </div>
          )}
          <div className="flex flex-row sm:w-1/2 justify-center">
            <RepoIcon size={22} />
            <p className="text-base ml-2">{repos || 0} repositories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
