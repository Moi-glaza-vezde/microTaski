import React from 'react';
type FooterPropsType = {
   title: string;
};
export const Footer = (props: FooterPropsType) => {
   return (
      <footer>
         <h2> {props.title}</h2>
      </footer>
   );
};
