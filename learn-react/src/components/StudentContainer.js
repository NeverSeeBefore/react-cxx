import React, { useState, useEffect } from "react";
import { getStudentByPage } from "../services/student";
import StudentList from "./StudentList";


// 接受一个页码,向服务器接收数据
export default function StudentContainer() {
  const [student, setStudent] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function () {
      const data = await getStudentByPage(page); 
      setStudent(data);
    })()
    return () => {
      console.log('清理函数')
    }
  }, [page])

  return (
    <div>
      <StudentList stus={student}></StudentList>
      <input type='number' value={page} onChange={(e) => {
          setPage(parseInt(e.target.value) || '');
      }}></input>
    </div>
  );
}

