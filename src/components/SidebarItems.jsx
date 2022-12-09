import React from 'react';

const SidebarItems = ({ text, icon, action, className }) => {
  return (
    <div
      className={
        'text-white cursor-pointer flex items-center px-3 rounded-lg  hover:bg-white/[0.15] ' +
        className
      }
      onClick={action}
    >
      <span className="mr-5 py-2">{icon}</span>
      {text}
    </div>
  );
};

export default SidebarItems;
