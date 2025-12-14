import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [username, setUsername] = useState("");
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const addUser = () => {
    dispatch({ type: "ADD_USER", payload: username });
  };

  return (
    <div className="app">
      <input
        type="time"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <button onClick={addUser}>Add user</button>

      <ul>
        {users.map(u => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
