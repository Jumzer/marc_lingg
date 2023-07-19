import React from "react";
import logo from "../assets/logo/logo_1.svg";

function Header() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="basis-1/2">
        <h1 className="">Marc Lingg</h1>
      </div>
      <div className="basis-1/2 flex justify-end">
        <img className="w-20" src={logo} alt="logo world" />
      </div>
    </div>
  );
}

export default Header;
