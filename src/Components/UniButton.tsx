type UniButtonType = {
  buttonName: string
  callBack: () => void
}

export const UniButton = (props: UniButtonType) => {

  const onClickHandler = () => {
    props.callBack()
  }

  return (
      <button onClick={onClickHandler}>{props.buttonName}</button>
  )
}
