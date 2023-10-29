import React from "react";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="application-home md:container md:mx-auto content-center text-center">
      <h1>Welcome to <b>FutbolIn</b>, checkout the next football matches...</h1>
      <NavLink to='/games' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
          Take a look!
      </NavLink>
    </div>
  );
};
