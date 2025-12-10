const Button = ({ text = "Click me" }) => {
  return <button>{text}</button>;
};

const App = () => {
  return (
    <div className="app">
      <Button text="Mario" />
      <Button />
    </div>
  );
};

export default App;
