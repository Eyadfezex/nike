import React from "react";
import { headerLogo } from "../assets/images";
import { burger } from "../assets/icons/index";
import { navLinks } from "../constants/index";
const NavBar = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="flex items-center">
              <a href={item.href} className="">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="invisible max-lg:visible ">
          <img src={burger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
