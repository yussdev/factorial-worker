import React from "react";
import { factorial } from "../../utils";
import styles from "./index.module.css";

export const NumbersList = React.memo(({ numberList = [] }) => {
  return numberList.map((num, idx) => (
    <ul className={styles.list}>
      <li key={idx} className={styles.listItem}>
        <strong>Result of {num.toString()}! is:</strong>
        <br />
        <code>{String(factorial(num)).slice(0, 200)}...</code>
        <button
          className={styles.smallButton}
          onClick={() => {
            navigator.clipboard.writeText(factorial(num));
          }}
        >
          Copy
        </button>
      </li>
    </ul>
  ));
});
