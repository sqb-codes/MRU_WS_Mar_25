import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const incCounter = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Counter Application</h1>
      <h2>Count is {count}</h2>
      <button onClick={incCounter}>Increment counter</button>
    </>
  )
}

export default App
