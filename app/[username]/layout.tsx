export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-4 flex flex-col h-screen">{children}</div>;
}
