import React, { useState, useEffect }  from 'react';
import moneyIcon from '@/assets/money.svg';
import Events from '@/Events';

const Money: React.FC = () => {
  const [money, setMoney] = useState(0);

  useEffect(() => {
    Events.Subscribe("ONC::UpdateMoney", (money: number) => {
      setMoney(money);
    });
  }, []);

  return (
    <div className="flex flex-col justify-evenly w-full md:w-60 shrink-0">
      <div className="flex items-center bg-app-bg p-1 rounded-full mb-2">
        <span className="text-xl ml-2 truncate w-screen tracking-wider">
          {new Intl.NumberFormat("en-en", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(money)}
        </span>
        <div className="icon ml-auto mr-2 flex justify-end w-full">
          <img src={moneyIcon} alt="Money" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Money;