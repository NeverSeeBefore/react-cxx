import React, {
  useState,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useEffect,
  useDebugValue
} from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>LayoutEffectHook</div>
      <TestUseDebugValue></TestUseDebugValue>
    </div>
  );
}
export default App;

function TestUseDebugValue() {
  const [n, setN] = useState(0);
  const [str, setStr] = useState('abc');
  const [students, ] = useTest([])
  useEffect(() => {
    console.log('useEffect')
  })

  return (
    <div>
    </div>
  );
}

function useTest(initial){
  const [students, setStudents] = useState(initial || [])
  useDebugValue("students")
  // useDebugValue(students)
  return students;
}