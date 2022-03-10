import {ChangeEvent, useState} from 'react';

type FullInputProps = {
  addMessage: (messageTitle: string)=>void
}


export const FullInput = (props: FullInputProps) => {

  let [messageTitle, setMessageTitle] = useState('')
  // console.log(message);

  // useState = [13, (13)=>message=13] Лёня
// let message = useState()[0]
// let setMessage = useState()[1]


  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageTitle(event.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    props.addMessage(messageTitle);
    setMessageTitle('');
  }

  return (
        <div>
          <input value={messageTitle} onChange={onChangeInputHandler}/>
          <button onClick={onClickButtonHandler}> + </button>
        </div>
  )
}
