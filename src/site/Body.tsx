import React from 'react';
import { NewComponent } from './NewComponent';
type BodyPropsType = {
   title: string;
};

const students = [
   { name: 'Vit', id: 1, age: 20 },
   { name: 'Max', id: 2, age: 18 },
   { name: 'Sam', id: 3, age: 19 },
   { name: 'Kate', id: 4, age: 23 },
   { name: 'Victory', id: 5, age: 17 },
];
export const Body = (props: BodyPropsType) => {
   return (
      <>
         <h2>{props.title}</h2>
         <NewComponent students={students} />
      </>
   );
};
