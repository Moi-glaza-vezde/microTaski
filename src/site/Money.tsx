import React, { useState } from 'react';
import { NewComponent2 } from './NewComponent2';
type FilterType = 'all' | 'RUBLS' | 'Dollars';
export const Money = () => {
   const [money, setMoney] = useState([
      { banknots: 'Dollars', value: 100, number: ' a1234567890' },
      { banknots: 'Dollars', value: 50, number: ' z1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
      { banknots: 'Dollars', value: 100, number: ' e1234567890' },
      { banknots: 'Dollars', value: 50, number: ' c1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
      { banknots: 'Dollars', value: 50, number: ' x1234567890' },
      { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
   ]);

   const [filter, setFilter] = useState<FilterType>('all');

   let currentMoney = money;

   if (filter === 'RUBLS') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
   }
   if (filter === 'Dollars') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
   }
   const onClickFilterHandler = (nameBtn: FilterType) => {
      setFilter(nameBtn);
   };
   return <NewComponent2 callBack={onClickFilterHandler} currentMoney={currentMoney} />;
};
