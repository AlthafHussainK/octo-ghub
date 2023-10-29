const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function UserCardSkeleton() {
  return (
    <div
      className={`bg-yellow-500 border rounded-lg drop-shadow-md h-24`}
    ></div>
  );
}
