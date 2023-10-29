const cardBackground =
  "drop-shadow-md bg-black/20 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-80  border-gray-600 border rounded-lg";

export default function ProfileLoading() {
  return (
    <div className="p-4 flex flex-col h-screen">
      <div className="md:w-10/12 lg:w-[50rem] sm:mx-auto mx-0 ">
        <div className="flex justify-center relative z-10 ">
          <div className="w-60 h-60 bg-slate-600 rounded-full animate-pulse"></div>
        </div>
        <div
          className={`${cardBackground} justify-center text-center md:px-10 pb-12 space-y-3 pt-[100px] relative top-[-80px]`}
        >
          <div className="flex flex-col items-center space-y-3  animate-pulse ">
            <div className="w-64 h-5 rounded bg-slate-700"></div>
            <div className="w-32 h-5 rounded bg-slate-700"></div>
            <div className="w-72 h-5 rounded bg-slate-700"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap mx-12 space-y-4 items-center justify-around  animate-pulse">
            <div className="mt-4 h-5 rounded sm:w-5/12 justify-center bg-slate-700"></div>
            <div className="h-5 rounded sm:w-5/12 justify-center bg-slate-700"></div>
            <div className="h-5 rounded sm:w-5/12 justify-center bg-slate-700"></div>
            <div className="h-5 rounded sm:w-5/12 justify-center bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
