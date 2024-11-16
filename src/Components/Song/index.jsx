'use client';

import { PlayIcon, HeartIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import './style.scss';

const Song = ({ songName, singers, imageUrl }) => {
  return (
    <div className="song flex items-center space-x-3">
      {/* Left Block with Image and Play Icon */}
      <div className="image-container relative">
        {/* Song Image */}
        <img src={imageUrl} alt="Song" className="w-8 h-8" />
        
        {/* Overlay and Play Icon */}
        <div className="overlay opacity-25"></div>
        <div className="play-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center">
          <PlayIcon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Information Block */}
      <div className="flex flex-col ml-3 overflow-hidden">
        {/* Song Name (truncate if overflow) */}
        <div className="text-white text-sm font-medium truncate w-[200px]">
          {songName}
        </div>

        {/* Singers Names */}
        <div className="text-xs text-gray-300">
          {singers.slice(0, 2).map((singer, index) => (
            <span key={index} className="hover:underline">
              {singer}
              {index < singers.length - 1 && ','}
            </span>
          ))}
        </div>
      </div>

      {/* Right Block with Heart and Add Song Icons */}
      <div className="flex space-x-3 ml-auto">
        {/* Heart Icon */}
        <HeartIcon className="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-500" />

        {/* Add Song Icon */}
        <PlusCircleIcon className="w-5 h-5 text-gray-400 cursor-pointer hover:text-green-500" />
      </div>
    </div>
  );
};

export default Song;
