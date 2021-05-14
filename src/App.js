import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LanguageButton from "./components/LanguageButton";
import Nav from "./components/Nav";
import EventsList from "./components/EventsList copy";

function App() {
  return (
    <div className="App">
      <LanguageButton />
      <h1>This Day in History</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/past-week">
            <EventsList pastweek />
          </Route>
          <Route exact path="/">
            <EventsList today />
          </Route>
          <Route exact path="/next-week">
            <EventsList nextweek />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
