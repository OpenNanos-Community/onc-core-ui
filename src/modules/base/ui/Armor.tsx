import React from 'react';
import armorIcon from '@/assets/shield.svg';
import Events from '@/Events';

const Armor: React.FC = () => {
  const [armor, setArmor] = React.useState(0);

  Events.Subscribe("ONC::UpdateArmor", (armor: number) => {
    setArmor(armor);
  });
  return (
    <div className="flex flex-col justify-evenly w-full md:w-60 shrink-0">
      <div className="flex items-center">
        <div className="icon">
          <img src={armorIcon} alt="Armor" className="w-6 h-6" />
        </div>
        <span className="text-xl ml-auto self-end">{armor}%</span>
      </div>
      <div className="w-full bg-app-bg rounded-full h-2.5">
        <div className="bg-app-armor h-2.5 rounded-full" style={{ width: `${armor}%` }}></div>
      </div>
    </div>
  );
};

export default Armor;