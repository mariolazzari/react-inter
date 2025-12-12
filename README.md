# React interview

## Introduction

### Pros and cons

[Docs](https://react.dev/)

### Create app

[Docs](https://react.dev/learn/creating-a-react-app)

## Basic knowledge

### Virtual DOM

- In React, the Virtual DOM (VDOM) is a JavaScript-based representation of the actual browser DOM.
- React uses it to efficiently update the UI when your component’s state or props change.
- Shadow DOM: real browser technology for creating encapsulated DOM trees.

### JSX

- JSX (JavaScript XML) is a syntax extension for JavaScript used mainly in React to describe what the UI should look like.
- It looks like regular HTML
- Different from React

### className

- _class_ is a reserved word in JavaScript

```js
const App = () => {
  return <div className="app">App</div>;
};

export default App;
```

### Functional components

```js
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
```

### Class component

```js
import { Component } from "react";

class Button extends Component {
  render() {
    return <button>{this.props.name}</button>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Button name="Mario" />
      </div>
    );
  }
}

export default App;
```

### Dumb vs smart components

#### Dumb component (presentational)

A “dumb component” in React (also called a presentational component) is a component whose only job is to render UI based on the props it receives. It does not manage state (except maybe simple UI state), and it does not contain business logic.

- Receives data via props
- Receives callback functions via props (if it needs to trigger actions)
- No data fetching
- No business logic
- Usually stateless (though can use internal UI state if needed)
- Pure and reusable because its output depends only on props

```jsx
function UserCard({ name, age, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
```

#### Smart component (container)

A smart component in React (also called a container component) is responsible for managing state, logic, and data, and then passing that data down to dumb/presentational components.

- Manages state
- Handles business logic
- Performs data fetching
- Connects to external sources (API, Redux, context, etc.)
- Passes data & callbacks down to child components
- Often less reusable because it’s tied to logic

```jsx
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user/1")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const handleClick = () => {
    console.log("User clicked");
  };

  if (!user) return <p>Loading...</p>;

  return <UserCard name={user.name} age={user.age} onClick={handleClick} />;
}

export default UserContainer;
```

### Key index map

- Rendering a list in React is usually done using .map().
- Each rendered element must have a unique key to help React identify items efficiently.

```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function UserList() {
  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
```

### React fragment

- A React Fragment lets you wrap multiple elements without adding an extra DOM node (like a <div>).
- Useful when a component must return a single parent, but you don’t want unnecessary markup.

```jsx
function Example() {
  return (
    <>
      <h1>Hello</h1>
      <p>This is inside a fragment.</p>
    </>
  );
}
```

### Conditional rendering

- Conditional rendering in React means showing UI only when a condition is true.
- React uses normal JavaScript logic (if, &&, ?:) to decide what to render.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please log in.</h1>;
}
```

### Apply styles

| Method            | Best For                                |
| ----------------- | --------------------------------------- |
| Inline styles     | Quick, dynamic, JS-calculated styles    |
| CSS file          | Simple apps, global styles              |
| CSS modules       | Medium/large apps, style isolation      |
| Styled-components | Component-driven styling, theme support |

### Parent / child communication

#### Parent -> child

```jsx
// Parent.jsx
import React from "react";
import Child from "./Child";

export default function Parent() {
  const message = "Hello from Parent";
  return <Child greeting={message} count={5} />;
}

// Child.jsx
import React from "react";

export default function Child({ greeting, count }) {
  return (
    <div>
      <p>{greeting}</p>
      <p>Count: {count}</p>
    </div>
  );
}
```

#### Child -> parent

```jsx
// Parent.jsx
import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [value, setValue] = useState("");

  const handleChange = useCallback((newVal) => {
    setValue(newVal);
  }, []);

  return (
    <div>
      <h3>Parent value: {value}</h3>
      <Child value={value} onChange={handleChange} />
    </div>
  );
}

// Child.jsx (controlled)
import React from "react";

export default function Child({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="type something"
    />
  );
}
```

## Advanced knowledge

### useState

_useState_ lets your React component store and update local state.

```jsx
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### useEffect

_useEffect_ lets your component run side effects after render.

```jsx
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
```

### useReducer

_useReducer_ is an alternative to useState for managing complex state or multiple state updates that belong together.

```jsx
import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  console.log("reducer", state, action);

  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "success":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: "loading" });
    axios.get("http://localhost:3004/articles").then(response => {
      dispatch({ type: "success", payload: response.data });
    });
  }, []);
  return (
    <div className="app">
      {state.isLoading && <div>Loading...</div>}
      {state.data.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
};

export default App;
```

### useContext

_useContext_ is a React Hook that lets you read values from a Context without needing to pass props manually through every component level.

```js
import { createContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [activeTheme, setActiveTheme] = useState("light");

  const toogleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toogleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### useRef

_useRef_ is a React Hook that lets you create a mutable reference object that persists across renders.

```jsx
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
```

### useMemo

_useMemo_ is a React Hook that memoizes (caches) the result of a calculation, so it isn’t recomputed on every render.
It helps optimize performance by avoiding unnecessary expensive computations.

```js
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
```

### useCallback

_useCallback_ is a React Hook that memoizes (caches) a function so that it keeps the same reference between renders unless its dependencies change.

```jsx
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
```

### Custom hook: useFetch

```jsx
import { useEffect, useState, useCallback } from "react";

export const useFetch = ({ url }) => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const refetch = useCallback(async () => {
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const data = await res.json();
      setdata(data);
      setSuccess(true);
    } catch (ex) {
      console.error(ex);
      setError(ex.message || "Error fetching data");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return [{ data, loading, success, error }, refetch];
};
```

### Custom hook: useLocalStorage

```js
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```
