"use client";

import Link from "next/link";
import { AlertIcon } from "@primer/octicons-react";

export default function Error() {
  return (
    <div className="flex justify-center min-h-screen flex-col items-center space-y-4">
      <AlertIcon size={72} />
      <p className="font-semibold text-xl  ">Something went wrong</p>
      <Link href="/">
        <p className="text-2xl font-light">Go Home</p>
      </Link>
    </div>
  );
}
