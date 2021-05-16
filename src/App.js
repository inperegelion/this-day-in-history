import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LanguageButton from "./components/LanguageButton";
import Nav from "./components/Nav";
import EventsTab from "./components/EventsTab";

function App() {
  return (
    <div className="App">
      <LanguageButton />
      <h1>This Day in History</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/past-week">
            <EventsTab pastweek />
          </Route>
          <Route exact path="/">
            <EventsTab today />
          </Route>
          <Route exact path="/next-week">
            <EventsTab nextweek />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
