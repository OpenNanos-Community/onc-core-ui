import React from 'react';
import armor from '@/assets/shield.svg';

const Armor: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly w-full md:w-60 shrink-0">
      <div className="flex items-center">
        <div className="icon">
          <img src={armor} alt="Armor" className="w-6 h-6" />
        </div>
        <span className="text-xl ml-auto self-end">50%</span>
      </div>
      <div className="w-full bg-app-bg rounded-full h-2.5">
        <div className="bg-app-armor h-2.5 rounded-full" style={{ width: "50%" }}></div>
      </div>
    </div>
  );
};

export default Armor;