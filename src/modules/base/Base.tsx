import React from 'react';
import Health from './ui/Health';
import Armor from './ui/Armor';
import Money from './ui/Money';
import Name from './ui/Name';
import Bars from './ui/Bars';


const Base: React.FC = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-end md:gap-10">
        <div className="flex flex-col-reverse">
          <div className="flex flex-col-reverse gap-2">
            <Health />
            <Armor />
          </div>
          <Money />
          <Name />
        </div>
        <Bars />
      </div>
    );
  };

export default Base;