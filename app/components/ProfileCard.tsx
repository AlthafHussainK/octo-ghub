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
    <div className="w-2/3 mx-auto ">
      <div className="flex justify-center relative z-10  drop-shadow-2xl">
        <Image
          style={{ borderRadius: "50%", border: "1px rgb(55 65 81) solid" }}
          src={avatarUrl}
          width={250}
          height={250}
          alt="Avatar"
        />
      </div>
      <div className="drop-shadow-md bg-black/20 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80  border-gray-600 border text-center rounded-lg px-10 pb-12 space-y-2 pt-[100px] relative top-[-80px]">
        <p className="text-2xl font-bold">{fullname}</p>
        <p className="text-lg font-semibold text-slate-400">{username}</p>
        <p className="text-base">{bio}</p>

        <div className="flex flex-row justify-center gap-x-2">
          <PeopleIcon size={22} />
          <p>{followers} followers</p>
          <span className="rounded-full w-1 h-1 my-auto bg-white"></span>
          <p>{following} following</p>
        </div>

        <div className="flex flex-row flex-wrap mx-12 space-y-4">
          {location && (
            <div className="flex flex-row w-1/2 mt-4">
              <LocationIcon size={22} />
              <p className="text-base ml-2">{location}</p>
            </div>
          )}
          {company && (
            <div className="flex flex-row w-1/2">
              <OrganizationIcon size={22} />
              <p className="text-base truncate ml-2">{company}</p>
            </div>
          )}
          {twitter && (
            <div className="flex flex-row w-1/2 fill-white">
              <TwitterIcon width={22} height={22} fill={"inherit"} />
              <p className="text-base ml-2">@{twitter || "--"}</p>
            </div>
          )}
          <div className="flex flex-row w-1/2">
            <RepoIcon size={22} />
            <p className="text-base ml-2">{repos || 0} repositories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
