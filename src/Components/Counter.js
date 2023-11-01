import { useSelector,useDispatch } from "react-redux";
import {increase_count,dicrese_count} from "../redux/count/countSlice"


function Counter() {
const count=useSelector(state=>state.count.value)
const dispatch=useDispatch()

const increment=()=>{
  dispatch(increase_count())
}
const dicrement=()=>{
  dispatch(dicrese_count())
}

    return (
      <div className="counter">
        <h2>Counter</h2>
        <h3>The count is -{count} </h3>
        <button onClick={increment}>Increase</button>
        <button onClick={dicrement} >Decrease</button>
      </div>
    );
  }
  
  export default Counter;