// A10_ExportDefault.js
function App() {
  const x = 10;
  const y = 20;

  function inner() {
    console.log(`${x} - ${y} = ${x - y}`);
  }

  return {x, y, inner};
}
export default App;
