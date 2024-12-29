import React from 'react';

type NewComponent2PropsType = {
   currentMoney: Array<{ banknots: string; value: number; number: string }>;
   callBack: (name: 'all' | 'RUBLS' | 'Dollars') => void;
};
export const NewComponent2 = (props: NewComponent2PropsType) => {
   const onClickFilterHandler = (name: 'all' | 'RUBLS' | 'Dollars') => {
      props.callBack(name);
   };
   return (
      <>
         <ul>
            Money
            {props.currentMoney.map((m, index) => {
               return (
                  <li key={index}>
                     <span>{m.banknots}</span>
                     <span>{m.value}</span>
                     <span>{m.number}</span>
                  </li>
               );
            })}
         </ul>
         <div style={{ marginLeft: '35px' }}>
            <button onClick={() => onClickFilterHandler('all')}>all</button>
            <button onClick={() => onClickFilterHandler('RUBLS')}>ruble</button>
            <button onClick={() => onClickFilterHandler('Dollars')}>dollars</button>
         </div>
      </>
   );
};
