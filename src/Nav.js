import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}
export default Nav;
