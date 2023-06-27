import { Layout } from "components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "redux/store";

export const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.myValue);

  return (
    <Layout>
      <h1>App</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

    </Layout>
  );
};
