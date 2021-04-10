import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(prevState => !prevState);
  };

  const mobileMenuButton = <button type="button" onClick={handleToggleMobileMenu}>☰</button>;

  const menuLinks = (
    <>
      <div className="px-3 py-2 hover:bg-gray-600">
        <Link onClick={() => setToggleMobileMenu(false)} to="/">
          Home
        </Link>
      </div>
      <div className="px-3 py-2 hover:bg-gray-600">
        <Link onClick={() => setToggleMobileMenu(false)} to="/calculator">
          Calculator
        </Link>
      </div>
      <div className="px-3 py-2 hover:bg-gray-600">
        <Link onClick={() => setToggleMobileMenu(false)} to="/quote">
          Quote
        </Link>
      </div>
    </>
  );

  const mobileMenu = (
    <div className="absolute w-screen h-screen bg-gray-700 text-gray-100 p-4">
      <button
        type="button"
        onClick={handleToggleMobileMenu}
        className="w-11 h-11 text-6xl absolute top-5 right-5"
      >
        x
      </button>
      <div className="h-full flex flex-col w-11/12 pb-40 pt-10 px-5 text-5xl items-center justify-evenly">
        {menuLinks}
      </div>
    </div>
  );

  return (
    <div className="flex justify-between md:text-lg bg-gray-700 text-gray-200">
      {toggleMobileMenu ? mobileMenu : null}
      <div className="flex justify-start hover:text-gray">
        <div className=" px-3 py-2 hover:bg-gray-600">
          <Link to="/">Math-Magicians </Link>
        </div>
      </div>
      <div className="sm:hidden flex justify-end text-xl pt-2 px-2">
        {mobileMenuButton}
      </div>
      <div className="hidden sm:flex">
        {menuLinks}
      </div>
    </div>
  );
}

export default Navbar;
