import React, { useState } from 'react';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';

function App() {
   let [a, setA] = useState(1);
   const onClickHandler = () => {
      setA(++a);
      console.log(a);
   };

   const onClickReset = () => {
      setA(0);
   };
   return (
      <>
         <h2>{a}</h2>
         <button onClick={onClickHandler}>number</button>
         <button onClick={onClickReset}>0</button>
         <Header title={'NEW HEADER'} />
         <Body title={'NEW BODY'} />
         <Footer title={'NEW FOOTER'} />
      </>
   );
}

export default App;
