import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const onButtonClick = value => {
    console.log("onButtonClick in parent", value);
    setCounter(counter + 1);
  };
  return (
    <div className="app">
      App {counter}
      <button onClick={() => onButtonClick("hello")}>Hello</button>
    </div>
  );
};

export default App;
