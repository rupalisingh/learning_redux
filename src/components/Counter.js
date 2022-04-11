import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {CounterAction} from '../store/counterSlice'

const Counter = () => {
  // Component subscribing to the store to get accesss to state
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector(state => state.showCounter)

  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(CounterAction.toggleShow())
  };
  const handleIncrement = () => {
    dispatch(CounterAction.increment());
  };

  const handleIncrease = () => {
    dispatch(CounterAction.increase(10))
  }

  const handleDecrement = () => {
    dispatch(CounterAction.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show && <div className={classes.value}>{counter}</div>
      }
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrease}>Increase by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
