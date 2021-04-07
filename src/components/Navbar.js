import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex justify-around text-lg bg-gray-700 text-gray-200 ">
      <div className="flex justify-start hover:text-gray">
        <div className=" px-3 py-2 hover:bg-gray-600">
          <Link to="/">Math-Magicians </Link>
        </div>
      </div>
      <div className="flex justify-end ">
        <div className=" px-3 py-2 hover:bg-gray-600 ">
          <Link to="/">Home </Link>
        </div>
        <div className=" px-3 py-2 hover:bg-gray-600">
          <Link to="/calculator">Calculator </Link>
        </div>
        <div className=" px-3 py-2 hover:bg-gray-600">
          <Link to="/quote">Quote </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
