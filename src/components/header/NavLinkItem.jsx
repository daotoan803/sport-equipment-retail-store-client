import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, name }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'text-primary font-bold' : '')}>
      <p className="w-full py-2  text-center text-lg border-b border-slate-300 hover:bg-slate-300 lg:border-0 lg:px-4 lg:w-auto lg:rounded-xl">
        {name}
      </p>
    </NavLink>
  );
};

export default NavLinkItem;
