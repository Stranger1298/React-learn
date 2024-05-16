import { useState } from 'preact/hooks'
export function App() {


  const [counter, setCount] = useState(0) //Hooks
  // let counter=4;
  function addValue(){
    setCount(counter+1);
  }
  function subValue(){
    setCount(counter-1);
  }

  return (
    <>
      <h1>React Counter!!</h1>
      <h2>Counter:{counter} </h2>
      <h1>{counter}</h1>
      <button
      onClick={addValue}
      >Add counter</button>{"  "}
      <button
      onClick={subValue}
      >Remove counter</button>
    </>
  )
}
