import React from "react";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to="/">
        <div className="items-center gap-0.5 text-white flex font-semibold text-2xl">
          <img src={assets.logo} alt="logo" className={`h-9`} />
          <span className="h-9 text-black">GuestHouseAssist</span>
        </div>
      </Link>
      <UserButton />
    </div>
  );
};

export default Navbar;
