import React from 'react';
import hunger from '@/assets/hamburger.svg';
import thirst from '@/assets/bottle.svg';
import stamina from '@/assets/run.svg';

const Bars: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 shrink-0">
      <div className="flex items-center">
        <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full shrink-0">
          <div className="absolute bottom-0 bg-app-hunger w-3 rounded-full" style={{ height: "80%" }}></div>
        </div>
        <div className="flex items-center justify-center h-20 ml-2">
          <img src={hunger} alt="Hunger" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full shrink-0">
          <div className="absolute bottom-0 bg-app-thirst w-3 rounded-full" style={{ height: "60%" }}></div>
        </div>
        <div className="flex items-center justify-center h-20 ml-2">
          <img src={thirst} alt="Thirst" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full shrink-0">
          <div className="absolute bottom-0 bg-app-text w-3 rounded-full" style={{ height: "40%" }}></div>
        </div>
        <div className="flex items-center justify-center h-20 ml-2">
          <img src={stamina} alt="Stamina" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Bars;