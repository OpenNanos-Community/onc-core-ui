import React, { useState, useEffect } from 'react';
import heartbeat from '@/assets/heartbeat.svg';
import Events from '@/Events';

const Health: React.FC = () => {
  const [health, setHealth] = useState(0);

  useEffect(() => {
    Events.Subscribe("ONC::UpdateHealth", (health: number) => {
      setHealth(health);
    });
  }, []);

  return (
    <div className="flex flex-col justify-evenly w-full md:w-60 shrink-0">
      <div className="flex items-center">
        <div className="icon">
          <img src={heartbeat} alt="Health" className="w-6 h-6" />
        </div>
        <span className="text-xl ml-auto self-end">{health}%</span>
      </div>
      <div className="w-full bg-app-bg rounded-full h-2.5">
        <div className="bg-app-health h-2.5 rounded-full" style={{ width: `${health}%`, transition: 'width 1s' }}></div>
      </div>
    </div>
  );
};

export default Health;