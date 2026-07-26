import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const Multicount = useMemo(() => {
    console.warn("update");
    return count * 5;
  }, [count]);

  return (
    <div>
      <h1>Hello useMemo</h1>

      <h2>{count}</h2>
      <h3>{item}</h3>
      <h4>{Multicount}</h4>

      <button onClick={() => setCount(count + 2)}>Update Count</button>

      <br />

      <button onClick={() => setItem(item * 5)}>Update Item</button>
    </div>
  );
}

export default App;
