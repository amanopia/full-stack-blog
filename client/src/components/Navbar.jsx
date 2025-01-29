import { React, useState } from "react";
import Image from "./Image";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src={"/logo.png"} className={"w-8 h-8"} alt="logo" />
        <span>lamalog</span>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        <div className="cursor-pointer text-4xl">{open ? "X" : "≡"}</div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 font-medium text-lg ${
            open ? "-right-0" : "-right-[100%]"
          } transition-all ease-in-out`}>
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white transition-all ease-in hover:bg-blue-400">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/home">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white transition-all ease-in hover:bg-blue-400">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
