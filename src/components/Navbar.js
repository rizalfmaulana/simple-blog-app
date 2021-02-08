import React from "react";

function Navbar() {
  return (
    <header>
      <h1>Blogs</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Post</a>
          </li>
        </ul>
      </nav>
      <a href="#">
        <button>Login</button>
      </a>
    </header>
  );
}

export default Navbar;
