type ButtonPropsType = {
  id: number
  deleteStudent: (id: number) => void
}


export const Button = (props: ButtonPropsType) => {
  return (
      <button onClick={() => props.deleteStudent(props.id)}>Delete</button>
  )
}
