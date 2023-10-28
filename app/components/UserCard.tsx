import { LocationIcon } from "@primer/octicons-react";
import Image from "next/image";

interface UserCardProps {
  avatarUrl: string;
  fullname: string;
  username: string;
  company: string;
  location: string;
  bio: string;
}

export default function UserCard(props: UserCardProps) {
  const { avatarUrl, fullname, username, company, location, bio } = props;

  return (
    <div className="p-4 flex flex-row gap-x-2 border rounded-lg drop-shadow-md bg-black/20 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80  border-gray-600  ">
      <div className="w-1/6">
        <Image
          style={{ borderRadius: "50%" }}
          src={avatarUrl}
          width={72}
          height={72}
          alt="Avatar"
        />
      </div>

      <div className="w-5/6">
        <div className="flex flex-row gap-x-1 items-end">
          <p className="text-xl font-medium text-blue-500 truncate">
            {fullname || username}
          </p>
          <p className="text-md text-slate-400 truncate">{username}</p>
        </div>
        <div className="flex flex-row items-center ">
          {/* <p className="text-md truncate w-1/3">{company || "--"}</p> */}
          <LocationIcon size={16} />
          <p className="text-md truncate w-2/3 ml-1">{location || "--"}</p>
        </div>
      </div>
    </div>
  );
}
