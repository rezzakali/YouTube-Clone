import React, { useContext } from 'react';
import SidebarItems from '../components/SidebarItems';
import { Context } from '../context/contextApi';
import sidebarMenuItems from '../utils/sidebarMenuItems';

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(Context);

  const handleClick = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectedCategory(name);

      case 'home':
        return setSelectedCategory(name);

      case 'menu':
        return false;

      default:
        break;
    }
  };
  return (
    <div className="md:block w-[240px] bg-black overflow-y-auto h-full py-4 absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {sidebarMenuItems?.map((item, id) => (
          <div key={id}>
            <SidebarItems
              text={item.type === 'home' ? 'Home' : item.name}
              icon={item.icon}
              action={() => handleClick(item.name, item.type)}
              className={`${
                selectedCategory === item.name ? 'bg-white/[0.15]' : ''
              }`}
            />

            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </div>
        ))}
        <hr className="my-5 border-white/[0.2]" />
        <div>
          <p className="text-white/[0.5] text-[14px]">Clone by Rezzak Ali</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
