import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LanguageButton from "./components/LanguageButton";
import Nav from "./components/Nav";
import EventsList from "./components/EventsList";

function App() {
  const todayDate = new Date();

  const today = {
    month: todayDate.getMonth() + 1,
    dayDate: todayDate.getDate(),
  };

  return (
    <div className="App">
      <LanguageButton />
      <h1>This Day in History</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/past-week">
            <EventsList today={today} pastweek />
          </Route>
          <Route exact path="/">
            <EventsList today={today} />
          </Route>
          <Route exact path="/next-week">
            <EventsList today={today} nextweek />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
