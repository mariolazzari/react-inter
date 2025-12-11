import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const onFocusClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.value = "Mario";
    inputRef.current.focus();
  };

  return (
    <div className="app">
      <input ref={inputRef} type="text" />
      <button onClick={onFocusClick}>Focus</button>
    </div>
  );
};

export default App;
