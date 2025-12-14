import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/users";

const App = () => {
  const [username, setUsername] = useState("");
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(addUser(username));
  };

  return (
    <div className="app">
      <input
        type="time"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <button onClick={onAddClick}>Add user</button>

      <ul>
        {users.map(u => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
