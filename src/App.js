import "./App.scss";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Post from "./components/Post";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default App;
