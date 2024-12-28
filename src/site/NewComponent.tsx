import React from 'react';

type NewComponentPropsType = {
   students: Array<StudentType>;
};

type StudentType = {
   name: string;
   id: number;
   age: number;
};
export const NewComponent = (props: NewComponentPropsType) => {
   const topCars = [
      { manufacturer: 'BMW', model: 'm5cs' },
      { manufacturer: 'Mercedes', model: 'e63s' },
      { manufacturer: 'Audi', model: 'rs6' },
   ];
   return (
      <>
         <table>
            <tbody>
               {topCars.map((c, index) => {
                  return (
                     <tr key={index}>
                        <th>{c.manufacturer} </th>
                        <th>Model: {c.model}</th>
                     </tr>
                  );
               })}
            </tbody>
         </table>

         <ul>
            {props.students.map((s) => {
               return (
                  <li key={s.id}>
                     <span>Name: {s.name},</span>
                     <span> Age: {s.age}</span>
                  </li>
               );
            })}
         </ul>
      </>
   );
};
