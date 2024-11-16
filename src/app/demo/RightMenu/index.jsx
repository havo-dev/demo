'use client';

import { useState, useEffect, useRef } from 'react';
import { ClockIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import './style.scss';
import Song from '@/Components/Song';
import SONGS from '@/Constants';

const RightMenu = () => {
  // State to track active button and auto play toggle
  const [activeButton, setActiveButton] = useState('Danh Sách Phát');
  const [listHeight, setListHeight] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true); // Track auto-play toggle

  const songListRef = useRef(null);

  // Calculate the height of the song list dynamically
  const updateSongListHeight = () => {
    const buttonBlockHeight = document.querySelector('.button-block')?.offsetHeight || 0;
    const songBlockHeight = document.querySelector('.song-block')?.offsetHeight || 0;
    const windowHeight = window.innerHeight;

    // Calculate available height for song list
    const availableHeight = windowHeight - buttonBlockHeight - songBlockHeight - 20; // 20px for padding/margins
    setListHeight(availableHeight);
  };

  // Set up an effect to run once when the component mounts and on window resize
  useEffect(() => {
    updateSongListHeight();

    // Event listener for window resize
    window.addEventListener('resize', updateSongListHeight);
    return () => {
      window.removeEventListener('resize', updateSongListHeight);
    };
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Toggle auto-play state
  const toggleAutoPlay = () => {
    setIsAutoPlay(prev => !prev);
  };

  return (
    <aside className="right-menu w-[320px] px-2 py-5">
      {/* Button Block with border and radius */}
      <div className="button-block sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex space-x-3 rounded-[5px] left-block p-1">
            <div
              onClick={() => handleButtonClick('Danh Sách Phát')}
              className={` cursor-pointer px-3 py-1 text-white rounded-[5px] text-xs ${activeButton === 'Danh Sách Phát' ? 'active-button' : ''}`}
            >
              Danh Sách Phát
            </div>
            <div
              onClick={() => handleButtonClick('Nghe Gần Đây')}
              className={` cursor-pointer px-3 py-1 text-white rounded-[5px] text-xs ${activeButton === 'Nghe Gần Đây' ? 'active-button' : ''}`}
            >
              Nghe Gần Đây
            </div>
          </div>

          {/* Circle Icons */}
          <div className="flex space-x-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-full circle-icon">
              <ClockIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center justify-center w-7 h-7 rounded-full circle-icon ml-1">
              <InformationCircleIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        {/* Song Block */}
        <div className='p-1 song-block rounded-[5px] mt-3'>
          <Song songName="Song Name Song Name Song Name" singers={['Singer 1', 'Singer 2']} imageUrl="https://via.placeholder.com/150" />
        </div>

        {/* New Block with Auto Play Toggle */}
        <div className="mt-2 flex justify-between items-center p-2 bg-gray-800 rounded-[5px] text-white">
          <div className="flex flex-col">
            <div className="font-bold">{isAutoPlay ? 'Tự động phát' : 'Đã tắt tự động phát'}</div>
            <div className="text-xs">{isAutoPlay ? 'Danh sách bài hát gợi ý' : 'Bật lên để phát tiếp các bài hát gợi ý'}</div>
          </div>

          {/* Smaller Toggle Switch */}
          <div
            onClick={toggleAutoPlay}
            className={`toggle-switch cursor-pointer flex items-center w-6 h-3.5 p-0.5 rounded-full ${isAutoPlay ? 'bg-green-500' : 'bg-gray-500'}`}
          >
            <div
              className={`w-3 h-3 bg-white rounded-full transition-all duration-300 transform ${isAutoPlay ? 'translate-x-3' : 'translate-x-0'}`}
            />
          </div>
        </div>
      </div>

      {/* Render list of songs from SONGS */}
      {isAutoPlay && <div 
        ref={songListRef} 
        className="song-list mt-4 overflow-y-auto"
        style={{ maxHeight: `${listHeight}px` }}
      >
        {[...SONGS, ...SONGS, ...SONGS].map((song, index) => (
          <div key={index} className="p-1 song-item">
            <Song songName={song.songName} singers={song.singers} imageUrl={song.imageUrl} />
          </div>
        ))}
      </div>}
    </aside>
  );
}

export default RightMenu;
