import React, { useState, useEffect } from "react";
import "../header/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Change 768 to any breakpoint you prefer
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <>
          <button onClick={toggleSidebar} className="Sidebar-Button">
            ☰
          </button>
          {isSidebarOpen && (
            <div className="Sidebar">
              <button className="Button-Style-SideBar">
                <Link to="/" className="Text-Style">
                  About Me.
                </Link>
              </button>
              <button className="Button-Style-SideBar">
                <Link to="/Projects" className="Text-Style">
                  Projects.
                </Link>
              </button>
              <button className="Button-Style-SideBar">
                <Link to="/Achievements" className="Text-Style">
                  Achievements.
                </Link>
              </button>
              <button className="Button-Style-SideBar">
                <Link to="/Skills" className="Text-Style">
                  Skills.
                </Link>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="App-Header">
          <button className="Button-Style">
            <Link to="/" className="Text-Style">
              About Me.
            </Link>
          </button>
          <button className="Button-Style">
            <Link to="/Projects" className="Text-Style">
              Projects.
            </Link>
          </button>
          <button className="Button-Style">
            <Link to="/Achievements" className="Text-Style">
              Achievements.
            </Link>
          </button>
          <button className="Button-Style">
            <Link to="/Skills" className="Text-Style">
              Skills.
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
