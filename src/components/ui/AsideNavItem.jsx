import React from 'react';
import { NavLink } from 'react-router-dom';

const AsideNavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'border-r border-white px-1 text-center py-2 md:py-3 lg:px-2 lg:py-4 ' +
        (isActive
          ? 'text-primary font-bold'
          : 'bg-slate-200 border-b-2 text-gray-600 border-b-black')
      }>
      {children}
    </NavLink>
  );
};

export default AsideNavItem;
