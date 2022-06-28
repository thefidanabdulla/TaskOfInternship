import React from "react";
import { Link } from 'react-router-dom';
import {BsFillMoonFill} from 'react-icons/bs';

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">
            Task of Internship
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item btn">
              <Link to={'/'} className="nav-link  active"  aria-current="page">
                  Posts
                </Link>
              </li>
              <li className="nav-item btn">
                <Link to={'/users'} className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item btn">
                <Link to={'/comments'} className="nav-link">
                  Comments
                </Link>
              </li>
            </ul>
            <button className="btn btn-secondary">
                <BsFillMoonFill />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
