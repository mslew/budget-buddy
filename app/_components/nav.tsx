import NavLink from "./navlink";
import CreateButton from "./createbutton";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="relative flex flex-row justify-center items-center text-white pt-4">
      <div className="w-full lg:w-2/3 h-[90%] flex flex-row justify-between items-center pl-4 pr-4">
        <div className="h-3/4 w-1/4 flex flex-row flex-shrink justify-center items-center p-3">
          <a className="block" href="/">
            <Image
              src={"/logos/logo_light.png"}
              height={100}
              width={100}
              alt="logo"
            />
          </a>
        </div>
        <div className="h-3/4 w-1/2 flex flex-row-reverse flex-shrink gap-2 space-x-1 items-center">
          <CreateButton textSize="" height="h-4">Create</CreateButton>
          <NavLink href="/login" text="Login" />
          <NavLink href="/register" text="Register" />
        </div>
      </div>
    </nav>
  );
}
