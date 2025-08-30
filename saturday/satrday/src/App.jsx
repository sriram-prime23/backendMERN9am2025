import Counter from "./Counter";

function App() {
  return (
    <div>
      {/* Counter starts at 0, step = 1 */}
      <Counter initialValue={0} step={1} />

      {/* Counter starts at 10, step = 5 */}
      <Counter initialValue={10} step={5} />
    </div>
  );
}

export default App;
