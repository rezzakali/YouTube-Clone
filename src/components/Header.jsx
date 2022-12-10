import React, { useContext, useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { HiMicrophone } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { SlMenu } from 'react-icons/sl';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../context/contextApi';
import Loader from './Loader';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { loading, mobile, setMobile } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (
      (e?.key === 'Enter' || e === 'searchButton') &&
      searchQuery?.length > 0
    ) {
      navigate(`SearchResult/${searchQuery}`);
    }
  };
  const mobileMenuToggler = () => {
    setMobile(!mobile);
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== 'video' && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggler}
          >
            {mobile ? (
              <CgClose className="text-white" />
            ) : (
              <SlMenu className="text-white" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            src="../src/assets/Youtube_logo.png"
            alt="youtube"
            className="h-full hidden dark:md:block"
          />
          <img
            src="../src/assets/Youtube_logo_mobile.png"
            alt="youtube"
            className="h-full md:hidden"
          />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-8 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-1/2 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onKeyUp={searchQueryHandler}
            placeholder="search"
          />
        </div>
        <button className="w-[40px] h-8 md:h-8 md:w-[60px] flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-gray-200/[0.1]">
          <IoIosSearch className="text-white text-xl" />
        </button>
        <div className="w-8 h-8 flex items-center justify-center bg-gray-200/[0.1] rounded-full p-2 mx-1 cursor-pointer hover:bg-gray-200/[0.2]">
          <HiMicrophone className="text-white text-xl" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-200/[0.2] p-2 mx-1 cursor-pointer">
            <RiVideoAddLine className="text-white text-xl" />
          </div>
        </div>
        <div className="hidden md:flex mx-1">
          <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-200/[0.2] p-2 mx-1 cursor-pointer">
            <AiOutlineBell className="text-white text-xl" />
          </div>
          <h1 className="text-white text-sm -ml-5 bg-red-700 w-4 h-4 rounded-full items-center flex justify-center">
            3
          </h1>
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full p-2 cursor-pointer overflow-hidden">
            <img
              src="https://xsgames.co/randomusers/assets/avatars/male/10.jpg"
              alt="random_user"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
