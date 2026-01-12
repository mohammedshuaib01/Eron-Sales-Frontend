import { useEffect, useState } from "react";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR8XMSBSwVVMYGpqx3w9Ht8suwxdwipBaRYcyj_2-KpMdaPQboO6Y1XXmo0ZrBpcMe7VWKztqOhxaL6/pub?output=csv";


 const BASE_COUNT = 100;

  function WaitListCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then(res => res.text())
      .then(text => {
        const rows = text.trim().split("\n");
        const actualCount = Math.max(rows.length - 1, 0); // remove header
        setCount(actualCount);
      })
      .catch(err => {
        console.error("CSV fetch failed:", err);
        setCount(null);
      });
  }, []);

  if (count === null) return <>{BASE_COUNT}</>;

  
  if (count < 100) return <>{BASE_COUNT + count}</>;

  return <>{count}</>;
}

export default WaitListCount;
