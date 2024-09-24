import Counter from "./components/Counter"
import { useDispatch } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice";
import { decrementOdd, incrementOdd } from "./redux/features/oddSlice";
import { decrementEven, incrementEven } from "./redux/features/evenSlice";

function App() {
const dispatch =useDispatch();
  return (
    <div>
      <button onClick={e=>{dispatch(increment());dispatch(incrementOdd());dispatch(incrementEven());}}>+</button>
      <Counter/>
      <button onClick={e=>{dispatch(decrement());dispatch(decrementOdd());dispatch(decrementEven());}}>-</button>
    </div>
  )
}

export default App
