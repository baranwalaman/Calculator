import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <>
      {/* Card-1 */}
      <div className="bg-black rounded-lg font-serif flex gap-5 p-3 mx-5 md:h-auto md:px-3 md:py-4 md:w-auto">
        <img
          src={props.image}
          className="w-[30%] h-auto rounded md:w-[25%] text-white"
          alt="img_not_found"
        />
        <div className="flex flex-col gap-3">
          <h1 className=" text-slate-100 font-extrabold text-base">
            {props.name}
          </h1>
          <p className=" text-white text-xs">{props.about}</p>
          <Link
            to={props.btnLink}
            className="w-full h-auto align-middle text-center select-none rounded hover:bg-blue-600 hover:text-white bg-white text-black font-extrabold md:font-semibold " target="_blank"
          >
            {props.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
