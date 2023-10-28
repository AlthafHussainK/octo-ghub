export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 flex flex-col h-screen bg-gradient-to-r from-slate-900 to-slate-700 ">
      {children}
    </div>
  );
}
