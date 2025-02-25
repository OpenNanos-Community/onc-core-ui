import React from 'react';
import money from '@/assets/money.svg';

const Money: React.FC = () => {
  return (
    <div className="flex flex-col justify-evenly w-full md:w-60 shrink-0">
      <div className="flex items-center bg-app-bg p-1 rounded-full mb-2">
        <span className="text-xl ml-2 truncate w-screen tracking-wider">
          {new Intl.NumberFormat("en-en", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(18524700)}
        </span>
        <div className="icon ml-auto mr-2 flex justify-end w-full">
          <img src={money} alt="Money" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Money;