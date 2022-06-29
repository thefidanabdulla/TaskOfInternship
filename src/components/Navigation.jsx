import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setDarkMode } from "../features/darkModeSlice";
import { changeLang } from "../features/langSlice";

const Navigation = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const lang = useSelector((state) => state.lang.lang);
  console.log(lang);
  const dispatch = useDispatch();
  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "bg-dark text-white" : "bg-light"
        }`}
      >
        <div className="container-fluid">
          <Link
            to={"/"}
            className={`navbar-brand ${darkMode ? "text-white" : ""}`}
          >
            {lang === 'az' ? 'Staj üçün tapşırıq' : 'Task of Internship'}
            
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
                <Link
                  to={"/"}
                  className={`nav-link  active ${darkMode ? "text-white" : ""}`}
                  aria-current="page"
                >
                  {lang === 'az' ? 'Postlar' : 'Posts'}
                </Link>
              </li>
              <li className="nav-item btn">
                <Link
                  to={"/users"}
                  className={`nav-link  ${darkMode ? "text-white" : ""}`}
                >
                  {lang === 'az' ? 'İstifadəçilər' : 'Users'}
                </Link>
              </li>
              <li className="nav-item btn">
                <Link
                  to={"/comments"}
                  className={`nav-link  ${darkMode ? "text-white" : ""}`}
                >
                 {lang === 'az' ? 'Rəylər' : 'Comments'}
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex gap-1">
                <button
                  className={`btn ${lang === "az" ? "active" : ""} ${
                    darkMode ? "text-white" : ""
                  }`}
                  onClick={() => dispatch(changeLang("az"))}
                >
                  {" "}
                  Az
                </button>
                <div className="line"></div>
                <button
                  className={`btn ${lang === "en" ? "active" : ""} ${
                    darkMode ? "text-white" : ""
                  }`}
                  onClick={() => dispatch(changeLang("en"))}
                >
                  En
                </button>
              </div>
              <button
                className={`btn ${
                  darkMode ? "btn-warning text-white" : "btn-secondary"
                } `}
                onClick={() => dispatch(setDarkMode())}
              >
                {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
