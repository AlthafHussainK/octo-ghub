import { LocationIcon } from "@primer/octicons-react";
import Image from "next/image";
import { getUserData } from "@/lib/data";

interface UserCardProps {
  avatarUrl: string;
  username: string;
  fullname?: string | null;
  location?: string | null;
}

const userCardBackground =
  "border rounded-lg drop-shadow-md bg-black/20  bg-opacity-80  border-gray-600";

export default async function UserCard(props: UserCardProps) {
  const { avatarUrl, username } = props;
  const userData = await getUserData(username);
  const { location, name } = userData;

  return (
    <div className={`${userCardBackground} p-4 flex flex-row gap-x-2`}>
      <div className="w-1/6">
        <Image
          style={{ borderRadius: "50%" }}
          src={avatarUrl}
          width={72}
          height={72}
          alt="Avatar"
          quality={20}
        />
      </div>

      <div className="w-5/6">
        <div className="flex flex-row gap-x-1 items-end">
          <p
            data-testid="fullname"
            className="text-xl font-medium text-blue-500 truncate"
          >
            {name || username}
          </p>
          <p className="text-md text-slate-400 truncate">{username}</p>
        </div>
        <div className="flex flex-row items-center ">
          <LocationIcon size={16} />
          <p data-testid="location" className="text-md truncate w-2/3 ml-1">
            {location || "--"}
          </p>
        </div>
      </div>
    </div>
  );
}
