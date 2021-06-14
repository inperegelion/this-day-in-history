import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import giftPNG from "./assets/icons/gift.png";
import AnniversaryTab from "./components/AnniversaryTab";

function App() {
  return (
    <div className="App">
      <img src={giftPNG} alt="gift box" className="Giftbox-img" />
      <div className="App-bg-gradient" />
      <h1>Hiring Day</h1>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/past-week">
            <AnniversaryTab tab="PAST_DATES" />
          </Route>
          <Route exact path="/">
            <AnniversaryTab tab="TODAY" />
          </Route>
          <Route exact path="/next-week">
            <AnniversaryTab tab="NEXT_DATES" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
