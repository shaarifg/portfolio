import React from "react";
import './navbar.css'
import { NavbarData } from "./navbar.data";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex gap-3" id="landing">
        <div>
            Logo
        </div>
      <nav>
        <ul className="flex gap-3">
          {
            NavbarData.map((item)=>{
              return(<li>
                <Link to={item.path} key={item.path}>{item.name}</Link>
              </li>)
            })
          }
          
        </ul>
      </nav>
      <div>
        <button className="flex-1 align-left">Dark</button>
      </div>
    </div>
  );
};

export default Navbar;
