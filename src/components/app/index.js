import { useState } from "react";
import styles from "./styles.module.css";
import { NumbersList } from "./../NumbersList";

const App = () => {
  // States
  const [number, setNumber] = useState("");
  const [numberList, setNumberList] = useState([]);

  // Callbacks
  const addNumberList = () => {
    const numberToAdd = +number;
    if (Number.isFinite(numberToAdd)) {
      setNumberList([...numberList, numberToAdd]);
      setNumber("");
    }
  };
  return (
    <div>
      <h2 className={styles.appTitle}>Factorial!</h2>
      <br />
      <label htmlFor="number">Enter a number from 0 to 9999</label>
      <input
        className={styles.numberInput}
        type="number"
        name="number"
        value={number}
        onChange={(event) => setNumber(event.target.value.slice(0, 5))}
      />
      <br />
      <button onClick={addNumberList}>Add For Calculation</button>
      <hr />
      <h2>Output</h2>
      <NumbersList numberList={numberList} />
    </div>
  );
};

export default App;
