"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@primer/octicons-react";

export default function BackButton() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div
      onClick={handleBack}
      className={"flex space-x-2 items-center cursor-pointer"}
    >
      <ArrowLeftIcon size={22} />
      <p>Back</p>
    </div>
  );
}
