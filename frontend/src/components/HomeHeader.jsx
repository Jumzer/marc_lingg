import React from "react";
import logo from "../assets/logo/logo_1_white.png";

function Header() {
  return (
    <div className="myHeaderHomeBackground">
      <div className="flex flex-row justify-between">
        <div className="flex items-center basis-1/2">
          <h1 className="ml-2 p-2 text-center text-2xl">Marc Lingg</h1>
        </div>

        <div className="basis-1/2 flex justify-end p-4">
          <img className="w-10" src={logo} alt="logo world" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="ml-2 p-2 basis-1/2">
          <h3>Bagnolet</h3>
          <h3>lucio@photo.fr</h3>
          <h3>06 05 04 03 02</h3>
          <h3>Instagram</h3>
        </div>
        <div className="basis-1/2" />
      </div>
    </div>
  );
}

export default Header;
