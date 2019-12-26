import React from 'react';
import Student from '../student/Student';

export default function StudentList (props) {
  var stus = props.stus.map((item) => {
    return <Student key={item.id} {...item}></Student>
  })
  return (
      <ul>
        {stus}
      </ul>
    )

}

