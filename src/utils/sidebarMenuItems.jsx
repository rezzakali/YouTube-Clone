import React from 'react';
import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { ImNewspaper } from 'react-icons/im';
import { IoGameControllerSharp } from 'react-icons/io5';
import { MdLiveTv, MdLocalFireDepartment } from 'react-icons/md';
import { RiFeedbackLine, RiLightbulbLine } from 'react-icons/ri';

const sidebarMenuItems = [
  { name: 'New', icon: <AiFillHome />, type: 'home' },
  { name: 'Trending', icon: <MdLocalFireDepartment />, type: 'category' },
  { name: 'Music', icon: <CgMusicNote />, type: 'category' },
  { name: 'Films', icon: <FiFilm />, type: 'category' },
  { name: 'Live', icon: <MdLiveTv />, type: 'category' },
  { name: 'Gaming', icon: <IoGameControllerSharp />, type: 'category' },
  { name: 'News', icon: <ImNewspaper />, type: 'category' },
  { name: 'Sports', icon: <GiDiamondTrophy />, type: 'category' },
  { name: 'Learning', icon: <RiLightbulbLine />, type: 'category' },
  {
    name: 'Fashion & beauty',
    icon: <GiEclipse />,
    type: 'category',
    divider: true,
  },
  { name: 'Settings', icon: <FiSettings />, type: 'menu' },
  { name: 'Report History', icon: <AiOutlineFlag />, type: 'menu' },
  { name: 'Help', icon: <FiHelpCircle />, type: 'menu' },
  { name: 'Send feedback', icon: <RiFeedbackLine />, type: 'menu' },
];
export default sidebarMenuItems;
