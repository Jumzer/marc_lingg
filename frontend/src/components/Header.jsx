import React from "react";
import logo from "../assets/logo/logo_1_white.png";

function Header() {
  return (
    <div className="bg-blue-600 bg-opacity-25 flex flex-row justify-between">
      <div className="flex items-center basis-1/2">
        <h1 className="ml-2 p-2 text-center text-2xl">Marc Lingg</h1>
      </div>
      <div className="basis-1/2 flex justify-end p-4">
        <img className="w-10" src={logo} alt="logo world" />
      </div>
    </div>
  );
}

export default Header;
