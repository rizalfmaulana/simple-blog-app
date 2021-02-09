import "./App.scss";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Post from "./components/Post";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route exact path="/">
          <Post />
        </Route>
        <Route path="/post/:id">
          <Detail />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
