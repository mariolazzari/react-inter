import { useState, useCallback, memo } from "react";

const initUsers = [
  { id: 1, name: "Mario Lazzari" },
  { id: 2, name: "Maria Lazzari" },
];

const UserList = memo(({ users, onRemove }) => {
  return (
    <ul>
      {users.map(u => (
        <li key={u.id} onClick={() => onRemove(u.id)}>
          {u.name}
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  const [users, setUsers] = useState(initUsers);
  const [search, setSearch] = useState("");

  const onRemove = useCallback(
    id => {
      const filtered = users.filter(u => u.id !== id);
      setUsers(filtered);
    },
    [users]
  );

  return (
    <div className="app">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
};

export default App;
