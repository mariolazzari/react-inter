import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Layout from "./Layout";
import Article from "./Article";
import Auth from "./Auth";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/article:id" element={<Article />} />
          <Route
            path="/private"
            element={
              <Auth>
                <Article />
              </Auth>
            }
          />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
};

export default App;
