import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };

  const incrementBy5Handler = () => {
    // dispatch({ type: INCREASE, amount: 10 });
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    // dispatch({ type: DECREMENT });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: TOGGLE });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <Fragment>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={incrementBy5Handler}>Increase by 10</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </Fragment>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
