import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-screen text-center font-serif bg-slate-950 h-[5%]">

      <ul className="flex justify-around font-semibold h-7 items-center">
        <li className="text-white cursor-pointer hover:text-blue-500">
          <Link to="/home">Calculator App</Link>
        </li>
        <li className="text-white cursor-pointer hover:text-blue-500">
        <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
