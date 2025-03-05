import React, { useState } from 'react';
import Events from '@/Events';
import ammoIcon from '@/assets/ammo-box.svg';

const Ammo: React.FC = () => {
  const [currentAmmo, setCurrentAmmo] = useState(0);
  const [maxAmmo, setMaxAmmo] = useState(0);

  const handleUpdateAmmo = (current: number, max: number) => {
    setCurrentAmmo(current);
    setMaxAmmo(max);
  };

  Events.Subscribe('ONC::UpdateAmmo', handleUpdateAmmo);

  return (
    <div className="fixed top-4 right-4 bg-app-bg text-app-text px-4 py-2 rounded-lg shadow-lg flex items-center">
      <div className="text-lg">{currentAmmo} / {maxAmmo}</div>
      <img src={ammoIcon} alt="Ammo Icon" className="ml-2 w-5 h-5 fill-blue-500" />
    </div>
  );
};

export default Ammo;