import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); 

  function Likecount() {
    setCount(prevCount => prevCount + 1);
    console.log(count);
  }
  function Dislikecount(){
    setCount(prevCount=>prevCount-1);
    console.log(count);
  }
  function PropsTrials(props){
    console.log(props.name,props.age,props.color);
  }

  return (
    <div className="App">
      <h1 className="font-bold italic">hello</h1> 
      <button className="rounded-lg bg-gray-600 aria-checked:bg-sky-700"onClick={Likecount}>Like</button>
      <p>Likes: {count}</p>
      <button className="rounded-full ..." onClick={Dislikecount}>Like</button>
      <p>Dislikes: {count}</p>
      <PropsTrials
        name='bob'
        age='69'
        color='green'
      />
    </div>
  );
}

export default App;
