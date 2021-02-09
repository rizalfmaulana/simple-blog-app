import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link className="home">Blogger</Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Create Post</Link>
          </li>
        </ul>
      </nav>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </header>
  );
}

export default Navbar;
