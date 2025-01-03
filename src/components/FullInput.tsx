import React, { ChangeEvent, useState } from 'react';

type FullInputProsType = {
   addMessage: (title: string) => void;
};

export const FullInput = (props: FullInputProsType) => {
   let [title, setTitle] = useState('');
   console.log(title);
   const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
   };

   const onClickBtnHandler = () => {
      props.addMessage(title);
      setTitle('');
   };
   return (
      <div>
         <input value={title} onChange={onChangeInputHandler} />
         <button onClick={onClickBtnHandler}>+</button>
      </div>
   );
};
