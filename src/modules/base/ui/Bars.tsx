import React from 'react';
import hungerIcon from '@/assets/hamburger.svg';
import thirstIcon from '@/assets/bottle.svg';
import staminaIcon from '@/assets/run.svg';
import Events from '@/Events';

const Bars: React.FC = () => {
  const [hunger, setHunger] = React.useState(0);
  const [thirst, setThirst] = React.useState(0);
  const [stamina, setStamina] = React.useState(0);

  Events.Subscribe("ONC::UpdateHunger", (hunger: number) => {
    setHunger(hunger);
  });

  Events.Subscribe("ONC::UpdateThirst", (thirst: number) => {
    setThirst(thirst);
  });

  Events.Subscribe("ONC::UpdateStamina", (stamina: number) => {
    setStamina(stamina);
  });

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 shrink-0">
      <div className="flex items-center">
        <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full shrink-0">
          <div className="absolute bottom-0 bg-app-hunger w-3 rounded-full" style={{ height: `${hunger}`, transition: 'width 1s'  }}></div>
        </div>
        <div className="flex items-center justify-center h-20 ml-2">
          <img src={hungerIcon} alt="Hunger" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full shrink-0">
          <div className="absolute bottom-0 bg-app-thirst w-3 rounded-full" style={{ height: `${thirst}`, transition: 'width 1s'  }}></div>
        </div>
        <div className="flex items-center justify-center h-20 ml-2">
          <img src={thirstIcon} alt="Thirst" className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center w-3 h-20 bg-app-bg rounded-full shrink-0">
          <div className="absolute bottom-0 bg-app-text w-3 rounded-full" style={{ height: `${stamina}`, transition: 'width 1s'  }}></div>
        </div>
        <div className="flex items-center justify-center h-20 ml-2">
          <img src={staminaIcon} alt="Stamina" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Bars;