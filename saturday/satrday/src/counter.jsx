import { useState } from "react";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <>
      <button onClick={() => setCount(count + step)}>Increment +{step}</button>
      <button onClick={() => setCount(count - step)}>Decrement -{step}</button>
      <button onClick={() => setCount(initialValue)}>= Reset =</button>
      <p>{count}</p>
    </>
  );
}
