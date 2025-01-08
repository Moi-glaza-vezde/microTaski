import React, { ChangeEvent, useState } from 'react';

type FullInputPropsType = {
   addMessage: (title: string) => void;
};

export const FullInput = (props: FullInputPropsType) => {
   let [title, setTitle] = useState('');
   const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
   };

   const onClickBtnHandler = () => {
      props.addMessage(title);
      setTitle('');
   };
   return (
      <div>
         <input onChange={onChangeInputHandler} value={title} />
         <button onClick={onClickBtnHandler}>+</button>
      </div>
   );
};
