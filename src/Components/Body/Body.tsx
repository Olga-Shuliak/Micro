import {NewComponent} from './NewComponent';
import {Bank} from './Bank';
import {FullInput} from './FullInput';
import {useState} from 'react';
import {Input} from './Input';
import {UniButton} from '../UniButton';

type BodyType = {
  title: string
}


export const Body = (props: BodyType) => {

  let studentsData = [
    {id: 1, name: 'Leonid', age: 36},
    {id: 2, name: 'Olga', age: 35},
    {id: 3, name: 'Ivan', age: 30},
    {id: 4, name: 'Zakhar', age: 18},
    {id: 5, name: 'Igor', age: 25},
    {id: 6, name: 'Vladimir', age: 40}
  ]

  const topCarsDate = [
    {id: 1, manufacturer: 'BMW', model: 'm5cs'},
    {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 4, manufacturer: 'Audi', model: 'rs6'}
  ]

  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}
  ])

  const addMessage = (messageTitle: string) => {
    // console.log(message)

    let newMessage = {message: messageTitle}
    setMessage([newMessage, ...message])
  }

  let [messageTitle, setMessageTitle] = useState('')

  const callBackInputButtonHandler = () => {
    addMessage(messageTitle)
    setMessageTitle('')
  }

  return (
      <div>
        <div>{props.title}</div>
        < NewComponent students={studentsData} cars={topCarsDate}/>
        <Bank/>
        {/*<FullInput addMessage={addMessage}/>*/}
        <Input setMessageTitle={setMessageTitle} messageTitle={messageTitle}/>
        <UniButton buttonName={'+'} callBack={callBackInputButtonHandler}/>
        {message.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
        })}

      </div>
  )
}
