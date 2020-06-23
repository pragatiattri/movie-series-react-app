import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="nav-bar-header">
        <div className="tv-logo">
          <Link className="nocss-anchor" to="/">
            KlearTV
          </Link>
        </div>
        <div className="my-content-tab">
          <Link className="nocss-anchor" to="/my-content">
            <i className="fas fa-user" style={{ fontSize: "26px" }} />
            <div style={{ fontSize: 14, textTransform: "uppercase" }}>
              My Content{" "}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
