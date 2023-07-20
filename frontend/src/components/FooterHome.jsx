import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.png";

function FooterHome() {
  return (
    <div className="w-full ml-2 p-2 flex justify-end">
      <Link to="/categories">
        <img className="w-8 mr-2" src={arrow} alt="arrow" />
        <h1 className="text-2xl">Découvrir</h1>
      </Link>
    </div>
  );
}

export default FooterHome;
