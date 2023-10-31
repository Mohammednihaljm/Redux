
function Counter({count,setCount}) {

   const increase=()=>{
    setCount(count=>count+1)
   }
   const dicrement=()=>{
    setCount(count=>count-1)
   }
    return (
      <div className="counter">
        <h2>Counter</h2>
        <h3>The count is - {count}</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={dicrement}>Decrease</button>
      </div>
    );
  }
  
  export default Counter;