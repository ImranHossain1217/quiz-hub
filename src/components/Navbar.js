import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    color: "blue",
  };
  return (
    <div className="flex justify-between p-6">
      <div>
        <h1 className="text-blue-500 text-2xl">Quiz Hub</h1>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mr-2 md:mr-5 hover:text-blue-500"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mr-2 md:mr-5 hover:text-blue-500"
          to="/topics"
        >
          Topics
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mr-2 md:mr-5 hover:text-blue-500"
          to="/statics"
        >
          Statics
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mr-2 md:mr-5 hover:text-blue-500"
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
