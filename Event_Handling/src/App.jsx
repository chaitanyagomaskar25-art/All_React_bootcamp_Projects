import React from "react";
import "./App.css"
const App = () => {
  const changeHandler = (e)=>{
    console.log(e.target.value);
    
  }
  const fruitShower = (fruit)=>{
    console.log(fruit)
  }
  const submitHandler = ()=>{
    console.log("Form was submitted safely wihtout refreshing!");
    
  }
    return (
    <div className="main">
      <h1>Event Handling Playground</h1>
      <label>
        Type Something: 
        <input onChange={changeHandler} type="text" />
      </label>
      <label>Pick a fruit to log to the console</label>
    
      <button onClick={()=>fruitShower("apple")} className="apple">Apple</button>
      <button onClick={()=>fruitShower("banana")} className="banana">Banana</button>
      <button onClick={()=>fruitShower("cherry")} className="cherry">Cherry</button>
      <h3>Try to submitting this form!</h3>
      <button onClick={submitHandler} className="submit">Submit</button>
    </div>
  );
};

export default App;
