import React from "react";
import { FaSearch } from "react-icons/fa";
import "./style.scss";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <NavLink className="navbar-brand text-white" to={"/"}>
          <img src={logo} alt="" className="img-fluid" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/explore/all">
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/explore/browser">
                Browser
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/explore/pc">
                Pc
              </NavLink>
            </li>
          </ul>
          <FaSearch onClick={()=>navigate("/search")} className="search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
