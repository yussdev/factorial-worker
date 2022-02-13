import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export const NumbersList = React.memo(({ numberList = [] }) => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const workers = Array.from({ length: numberList.length }, (_, index) => ({
      worker: new window.factorialWorker(),
      number: numberList[index],
    }));
    workers.forEach(({ worker, number }, idx) => {
      worker.addEventListener("message", (message) => {
        if (message.data.result) {
          const { result } = message.data;
          setResults((results) => ({
            ...results,
            [idx]: result,
          }));
        }
      });
      worker.calcFactorial(number);
    });
    return () => {
      workers.map(({ worker }) => worker.terminate());
    };
  }, [numberList]);

  return (
    <ul className={styles.list}>
      {numberList.map((num, idx) => (
        <li key={idx} className={styles.listItem}>
          <strong>Result of {num.toString()}! is:</strong>
          <br />
          {!results[idx] ? (
            "Calculating..."
          ) : (
            <React.Fragment>
              <code>{String(results[idx]).slice(0, 200)}...</code>
              <button
                className={styles.smallButton}
                onClick={() => {
                  navigator.clipboard.writeText(results[idx]);
                }}
              >
                Copy
              </button>
            </React.Fragment>
          )}
        </li>
      ))}
    </ul>
  );
});
