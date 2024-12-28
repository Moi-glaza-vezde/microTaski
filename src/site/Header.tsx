import React from 'react';
import { Button } from '../components/Button';
type HeaderProspsType = {
   title: string;
};
export const Header = (props: HeaderProspsType) => {
   const ButtonFoo1 = (name: string, age: number) => {
      console.log(`Im ${name} age:${age}`);
   };
   const ButtonFoo2 = (name: string, age: number) => {
      console.log(`Im ${name} age:${age}`);
   };
   const ButtonFoo3 = () => {
      console.log('stupid btn');
   };

   return (
      <>
         <h2>{props.title}</h2>

         <Button name={'Chenal - 1'} callBack={() => ButtonFoo1('Vasya', 21)} />
         <Button name={'Chenal - 2'} callBack={() => ButtonFoo2('Ivan', 19)} />
         <Button name={'stupid btn'} callBack={ButtonFoo3} />
      </>
   );
};
