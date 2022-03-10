import classes from './NewComponent.module.css';
import {Button} from '../Button';
import {useState} from 'react';

type NewComponentType = {
  students: Array<StudentType>
  cars: CarType[]
}

type StudentType = {
  id: number
  name: string
  age: number
}
type CarType = {
  id: number
  manufacturer: string
  model: string
}


export const NewComponent = (props: NewComponentType) => {

  const [students, setStudents] = useState(props.students)

  const deleteStudent = (id: number) => {
    const res = students.filter(student => student.id !== id)
    console.log(res);
    setStudents(res)
  }
  // console.log(props.cars.find(item => item.id === 4))
  const findCar = (id: number): string => {
    const car = props.cars.find(car => car.id == id)
    return car ? `${car.manufacturer} ${car.model}` : ''
  }
  return (
      <div className={classes.studentsBlock}>
        {students.map((objectFromStudentsArray, index) => {
          return (
              <div key={objectFromStudentsArray.id} className={classes.student}>
                <div>{objectFromStudentsArray.name}</div>
                <div>{objectFromStudentsArray.age} years</div>
                <span>
                  {findCar(objectFromStudentsArray.id)}
                 </span>
                <div>
                  <Button id={objectFromStudentsArray.id} deleteStudent={deleteStudent}/>
                </div>
              </div>

          )
        })}

      </div>
  )
}
