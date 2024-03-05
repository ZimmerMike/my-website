import SideNav from "../ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen md:overflow-hidden">
      <div className="flex flex-row w-full">
        <div className="flex flex-col items-center w-2/5">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 w-3/5">{children}</div>
      </div>
    </div>
  );
}