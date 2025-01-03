import React from 'react';
type BtnPropsType = {
   title: string;
   name: string;
   callBack: () => void;
};

export const Btn = (props: BtnPropsType) => {
   const onClickBtnHandler = () => {
      props.callBack();
   };
   return <button onClick={onClickBtnHandler}>{props.name}</button>;
};
