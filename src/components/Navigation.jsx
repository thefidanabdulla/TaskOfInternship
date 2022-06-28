import React from "react";
import { Link } from 'react-router-dom';
import {BsFillMoonFill} from 'react-icons/bs';

const Navigation = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to={'/'} class="navbar-brand">
            Task of Internship
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={'/'} class="nav-link active" aria-current="page">
                  Users
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/posts'} class="nav-link">
                  Posts
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/comments'} class="nav-link">
                  Comments
                </Link>
              </li>
            </ul>
            <button class="btn btn-secondary">
                <BsFillMoonFill />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
