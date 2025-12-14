import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <h2>Modal title</h2>
        <p>Hello from a portal</p>
      </Modal>
    </>
  );
}

export default App;
