import {ChangeEvent} from 'react';

type MessageTitlePropsType = {
  setMessageTitle: (messageTitle: string)=>void
  messageTitle: string
}

export const Input = (props: MessageTitlePropsType) => {

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setMessageTitle(event.currentTarget.value)
  }


  return (
      <input value={props.messageTitle} onChange={onChangeInputHandler}/>
  )
}
