'use client'

import { useState } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import './style.scss';


const LeftMenu = () => {
  const [activeItem, setActiveItem] = useState('Khám Phá');

  const handleMenuClick = (item) => {
    setActiveItem(item);
  };

  const renderLiItem = (name) => (
    <li
      className={`flex cursor-pointer items-center justify-center xl:pl-5 xl:items-center xl:justify-start h-12 ${activeItem === name ? 'active-item' : ''}`}
      onClick={() => handleMenuClick(name)}
    >
      <BookOpenIcon className="w-[24px]" />
      <span className="ml-2 hidden xl:flex">{name}</span>
    </li>
  );

  return (
    <aside className="min-h-screen w-[70px] xl:w-[250px] transition-all duration-300 left-menu">
      {/* Logo */}
      <div className="flex cursor-pointer items-center justify-center xl:pl-5 xl:items-center xl:justify-start h-12">
        <BookOpenIcon className="w-[24px]" />
        <span className="ml-2 hidden xl:flex">Demo logo</span>
      </div>

      {/* Menu Items */}
      <ul>
        {renderLiItem('Thư Viện')}
        {renderLiItem('Khám Phá')}
        {renderLiItem('#zingchart')}
        {renderLiItem('Theo Dõi')}
      </ul>

      {/* Divider */}
      <div className="border-t border-white mx-5 my-5"></div>

      {/* Menu Items */}
      <ul>
        {renderLiItem('BXH Nhạc Mới')}
        {renderLiItem('Chủ Đề & Thể Loại')}
        {renderLiItem('Top 100')}
      </ul>
      {/* Login Section */}
      <div className="rounded-lg mx-5 my-5 mt-5 p-4 text-center login-container hidden xl:block">
        <p className="text-white mb-4 hidden text-xs xl:block">
          Đăng nhập để khám phá playlist dành riêng cho bạn
        </p>
        <button className="border border-white text-white px-5 py-2 rounded-lg">
          Đăng Nhập
        </button>
      </div>
    </aside>
  );
}

export default LeftMenu;
