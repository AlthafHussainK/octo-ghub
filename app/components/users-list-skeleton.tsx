export default function UsersListSkeleton() {
  return (
    <>
      {[...Array(12).keys()].map((i) => (
        <div key={i} className="animate-pulse my-2 md:m-2 2xl:m-3 ">
          <div className="w-96 md:w-80 lg:w-96 h-24 bg-slate-600 rounded-lg"></div>
        </div>
      ))}
    </>
  );
}
