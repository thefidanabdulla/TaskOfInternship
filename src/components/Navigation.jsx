import React from "react";
import { Link } from 'react-router-dom';
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setDarkMode } from "../features/darkModeSlice";

const Navigation = () => {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  const dispatch = useDispatch();
  return (
    <header>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
        <div className="container-fluid">
          <Link to={'/'} className={`navbar-brand ${darkMode ? 'text-white' : ''}`}>
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
              <Link to={'/'} className={`nav-link  active ${darkMode ? 'text-white' : ''}`}  aria-current="page">
                  Posts
                </Link>
              </li>
              <li className="nav-item btn">
                <Link to={'/users'} className={`nav-link  ${darkMode ? 'text-white' : ''}`}>
                  Users
                </Link>
              </li>
              <li className="nav-item btn">
                <Link to={'/comments'} className={`nav-link  ${darkMode ? 'text-white' : ''}`}>
                  Comments
                </Link>
              </li>
            </ul>
            <button className={`btn ${darkMode ? 'btn-warning text-white' : 'btn-secondary'} `} onClick={() => dispatch(setDarkMode())}>
                {
                  darkMode ? <BsFillSunFill /> : <BsFillMoonFill />
                }
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
