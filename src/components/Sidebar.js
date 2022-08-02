import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  useEffect(() => {
    const body = document.querySelector("body");
    let sidebar = body.querySelector(".sidebar");
    let toggle = body.querySelector(".toggle");
    let modeSwitch = body.querySelector(".toggle-switch");
    let modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
      } else {
        modeText.innerText = "Dark mode";
      }
    });
  }, []);

  return (
    <nav className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
            {/*<!--<img src="logo.png" alt="">--> */}
            <img src="https://img.icons8.com/external-glyph-chroma-amoghdesign/32/000000/external-islam-ramadan-glyph-chroma-amoghdesign.png" />
          </span>

          <div className="text logo-text">
            <span className="name">Athkar</span>
            <span className="profession">Islamic App</span>
          </div>
        </div>

        <i className="bx bx-chevron-right toggle"></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul className="menu-links">
            <li className="nav-link">
              <Link to="/home">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/athkar">
                <i className="bx bx-book-content icon"></i>
                <span className="text nav-text">Athkar</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/prayer-times">
                <i className="bx bxs-time-five icon"></i>
                <span className="text nav-text">Prayer Times</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/tasbeeh">
                <i className="bx bx-list-ul icon"></i>
                <span className="text nav-text">Tasbeeh</span>
              </Link>
            </li>

            <li className="nav-link">
              <Link to="/profile">
                <i className="bx bx-heart icon"></i>
                <span className="text nav-text">Favourites</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <i className="bx bx-log-out icon"></i>
            <span className="text nav-text">Logout</span>
          </li>

          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark mode</span>

            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}
