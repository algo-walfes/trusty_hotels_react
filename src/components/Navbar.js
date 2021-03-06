import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import FavoriteLink from "./FavoriteLink";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" className="nav-logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
              <li>           
              <FavoriteLink />
              </li> 
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Profile />
            </li>
              <li>
            <LoginButton />
            <LogoutButton />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
