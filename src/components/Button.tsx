import React from 'react';
type ButtonPropsType = {
   name: string;
   callBack: () => void;
};
export const Button = (props: ButtonPropsType) => {
   const onClickHabdler = () => {
      props.callBack();
   };
   return <button onClick={onClickHabdler}>{props.name}</button>;
};
