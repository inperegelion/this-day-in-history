import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LanguageButton from "./components/LanguageButton";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <LanguageButton />
      <h1>This Day in History</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/past-week">
            PAST WEEK
          </Route>
          <Route exact path="/">
            TODAY
          </Route>
          <Route exact path="/next-week">
            NEXT WEEK
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
