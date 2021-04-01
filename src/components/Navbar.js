import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-around">
      <div className="flex justify-start">
        <h2>Math-Magicians</h2>
      </div>
      <div className="flex justify-end">
        <Link to="/">Home </Link>
        <Link to="/calculator">Calculator </Link>
        <Link to="/quote">Quote </Link>
      </div>
    </div>
  );
}

export default Navbar;
