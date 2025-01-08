import React from 'react';

type ButtonProsType = {
   name: string;
   callBack: () => void;
};
export const Btn = (props: ButtonProsType) => {
   const onClickButtonHandler = () => {
      props.callBack();
   };
   return <button onClick={onClickButtonHandler}>{props.name}</button>;
};
