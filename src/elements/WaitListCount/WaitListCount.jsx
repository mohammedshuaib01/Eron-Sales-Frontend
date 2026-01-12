import { useEffect, useState } from "react";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1deVa_4qYHkWvlO7U28K3yIoxqz8Wwurl8N7lAgTbRAs/gviz/tq?tqx=out:json";

function WaitListCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((text) => {
        const json = JSON.parse(text.substring(47).slice(0, -2));
        setCount(json.table.rows.length);
      })
      .catch(() => setCount(null));
  }, []);

  // fallback while loading
  if (count === null) return <>100+</>;

  return <>{count}</>;
}

export default WaitListCount;
