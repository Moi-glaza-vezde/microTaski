import React from 'react';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';

function App() {
   return (
      <>
         <Header title={'NEW HEADER'} />
         <Body title={'NEW BODY'} />
         <Footer title={'NEW FOOTER'} />
      </>
   );
}

export default App;
