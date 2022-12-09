import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarItems from '../components/SidebarItems';
import { Context } from '../context/contextApi';
import sidebarMenuItems from '../utils/sidebarMenuItems';

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory, mobile } = useContext(Context);
  const navigate = useNavigate();
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
    <div
      className={`md:block w-[240px] overflow-y-hidden hover:overflow-y-auto h-full py-4 bg-black absolute md:relative translate-x-[-240px] md:translate-x-0 transition-all ${
        mobile ? 'translate-x-0 z-10' : ''
      }`}
    >
      <div className="flex px-5 flex-col">
        {sidebarMenuItems.map((item) => (
          <React.Fragment key={item.name}>
            <SidebarItems
              text={item.type === 'home' ? 'Home' : item.name}
              icon={item.icon}
              action={() => {
                handleClick(item.name, item.type);
                navigate('/');
              }}
              className={`${
                selectedCategory === item.name ? 'bg-white/[0.15]' : ''
              }`}
            />

            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        ))}
        <hr className="my-5 border-white/[0.2]" />
        <div>
          <p className="text-white/[0.5] text-[14px]">Clone by: Rezzak Ali</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
