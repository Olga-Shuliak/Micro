import React, {useState} from 'react';
import './App.css';
import {Body} from './Components/Body/Body';
import {Header} from './Components/Header'
import {Footer} from './Components/Footer';
import {UniButton} from './Components/UniButton';


function App() {

  // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello I am Olia')
  // }
  // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello I am Leonid')
  // }

  const onClickHandler = (name: string) => {
    console.log(`Hello I am ${name}`)
  }

  const foo1 = () => {
    console.log(100200)
  }
  const foo2 = (numberToTransmit: number) => {
    console.log(numberToTransmit)
  }

  const ButtonFoo1 = (phrase: string, name: string) => {
    console.log(`${phrase} ${name}`)
  }
  const ButtonFoo2 = (phrase: string) => {
    console.log(phrase)
  }
  const nothingFoo = () => {
    console.log('')
  }

  // let a = 1;
  let [a, setA] = useState(1)

  const onClickHandlerNumber = () => {
    setA(a + 1);

  }
  console.log(a);
  const onClickHandlerNumberReset = () => {
    setA(1);
  }

  return (
      <div className="App">
        <Header title="Header"/>
        <Header title="Second header"/>

        <UniButton buttonName={'Hello'} callBack={() => ButtonFoo1('Hello', 'Bro')}/>
        <UniButton buttonName={'Bye'} callBack={() => ButtonFoo2('Bye')}/>
        <UniButton buttonName={'Stupid button'} callBack={nothingFoo}/>

        <h1>{a}</h1>
        <button onClick={onClickHandlerNumber}>Number</button>
        <button onClick={onClickHandlerNumberReset}>Reset</button>

        <Body title="New BODY"/>

        <button onClick={(event) => onClickHandler('Olia')}>Olia</button>
        <button onClick={(event) => onClickHandler('Leonid')}>Leonid</button>
        {/*<button onClick={(event) => {console.log('Hello')}}>My 2</button>*/}

        <button onClick={foo1}>1</button>
        <button onClick={(event) => foo2(100200)}>2</button>

        <Footer title="Footer"/>
      </div>
  );
}

export default App;
