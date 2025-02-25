import React from 'react';
import user from '@/assets/user.svg';

const Name: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly w-full md:w-60 shrink-0">
      <div className="flex items-center bg-app-bg p-1 rounded-full mb-2">
        <span className="text-xl ml-2 truncate w-screen">John Doe</span>
        <div className="icon ml-auto mr-2 flex justify-end w-full">
          <img src={user} alt="User" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Name;