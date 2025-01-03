import React, { useState } from 'react';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { Money } from './site/Money';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Btn } from './components/Btn';

function App() {
   let [message, setMessage] = useState([
      { message: 'message1' },
      { message: 'message2' },
      { message: 'message3' },
   ]);
   let [title, setTitle] = useState('');
   console.log(title);
   const addMessage = (title: string) => {
      let newMessage = { message: title };
      setMessage([newMessage, ...message]);
   };

   const onClickBtnHandler = () => {
      addMessage(title);
      setTitle('');
   };
   return (
      <div className="App">
         <Input setTitle={setTitle} title={title} />
         <Btn title={title} name="+" callBack={onClickBtnHandler} />
         {message.map((el, index) => {
            return <div key={index}>{el.message}</div>;
         })}
      </div>
   );
}

export default App;
//------------------------------------------------------

// let [a, setA] = useState(1);
// const onClickHandler = () => {
//    setA(++a);
//    console.log(a);
// };
// const onClickReset = () => {
//    setA(0);
// };
// return (
//    <>
//       <h2>{a}</h2>
//       <button onClick={onClickHandler}>number</button>
//       <button onClick={onClickReset}>0</button>
//       <Header title={'NEW HEADER'} />
//       <Body title={'NEW BODY'} />
//       <Money />
//       <Footer title={'NEW FOOTER'} />
//    </>
// );
