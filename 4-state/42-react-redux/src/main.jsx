import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";
import reducer from "./store";
import { composeWithDevTool } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(reducer, composeWithDevTool());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
