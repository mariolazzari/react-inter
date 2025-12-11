import { useState } from "react";

const users = [
  { id: 1, name: "Mario Lazzari" },
  { id: 2, name: "Maria Lazzari" },
];

const App = () => {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const filtered = useMemo(
    () =>
      users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  return (
    <div className="app">
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setSearch(text)}>Search</button>
      <p>
        {text} {search}
      </p>

      <ul>
        {filtered.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
