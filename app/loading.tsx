import Spinner from "./components/Spinner";
import { LogoGithubIcon } from "@primer/octicons-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center px-0">
      <h2 className="text-xl font-extralight">
        <LogoGithubIcon size={32} /> Users
      </h2>
      <div className="flex flex-col my-auto space-y-2 text-center">
        <Spinner />
        <p>Loading...</p>
      </div>
    </div>
  );
}
