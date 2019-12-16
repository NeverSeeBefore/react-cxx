import React from 'react';
import PropTypes from 'prop-types'

// 纯展示组件
export default function StudentList ({stus}) {
  console.log(stus);
  const list = stus.map(it => <li key={it.address}>name: {it.name} age: {it.age} address: {it.address} </li>)
  return (
      <div>
        <div>学生列表</div>
        {
          list
        }
      </div>
    )

  
}

StudentList.defaultProps = {
  stus: []
}

StudentList.propTypes = {
  stus: PropTypes.array.isRequired
}