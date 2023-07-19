import React from "react";
import arrow from "../assets/icons/arrow.png";

function FooterHome() {
  return (
    <div className="w-full ml-2 p-2 flex justify-end">
      <img className="w-8 mr-2" src={arrow} alt="arrow" />
      <h1 className="text-2xl">Découvrir</h1>
    </div>
  );
}

export default FooterHome;
