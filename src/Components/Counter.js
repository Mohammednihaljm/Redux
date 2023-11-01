import { useSelector,useDispatch } from "react-redux";
function Counter() {
const count=useSelector(state=>state.count.value)

    return (
      <div className="counter">
        <h2>Counter</h2>
        <h3>The count is -{count} </h3>
        <button >Increase</button>
        <button >Decrease</button>
      </div>
    );
  }
  
  export default Counter;