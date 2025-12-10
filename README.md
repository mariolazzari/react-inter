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
