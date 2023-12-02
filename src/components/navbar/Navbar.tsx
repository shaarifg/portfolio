import React from "react";
import './navbar.css'
const Navbar = () => {
  return (
    <div className="flex gap-3" id="landing">
        <div>
            Logo
        </div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <a href="./">About</a>
          </li>
          <li>
            <a href="./">Projects</a>
          </li>
          <li>
            <a href="./">Experience</a>
          </li>
          <li>
            <a href="./">Blogs</a>
          </li>
          <li>
            <a href="./">Let's Connect</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="flex-1 align-left">Dark</button>
      </div>
    </div>
  );
};

export default Navbar;
