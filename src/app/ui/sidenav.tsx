import Link from "next/link";
import NavLinks from "./navlinks";
import PersonalInfo from "./personal-info";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 w-max bg-slate-800 rounded-lg shadow-md">
      <PersonalInfo />
      <NavLinks />
    </div>
  );
}