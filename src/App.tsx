import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "./store";
import {
  increaseByValue,
  increaseCount
} from "./store/reducers/countRreducers";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const { count } = useSelector((state: StoreType) => state.CounterReducer);
  const dispatch = useDispatch();

  const handleCount = () => {
    if (value) dispatch(increaseByValue(value));
    else dispatch(increaseCount());
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          placeholder="Enter Todo"
          style={{ padding: "0.5rem 2rem" }}
        />
        <button
          style={{ padding: "0.5rem 2rem", marginLeft: "10px" }}
          onClick={handleCount}
        >
          Add
        </button>
      </div>

      <h3> value - {count}</h3>
    </div>
  );
}
