import {useState, useEffect} from 'react';
import { getStudentByPage } from '../../services/student';

export function useAllStudents(page) {
  const [student, setStudent] = useState([]);
  useEffect((page) => {
    (async () => {
      const stus = await getStudentByPage(page);
      setStudent(stus);
    })()
  }, [])
  return student;
}