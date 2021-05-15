import { createStore, applyMiddleware } from "redux";
import { eventsReducer } from "./reducers";
import thunkMiddleware from "redux-thunk";

const defaultState = {
  today: new Date().toISOString().slice(5, 10),
  todayObj: new Date(),
  /** Langs supported yet: [UK] */
  lang: "UK",
  /**
   * should contain items of format:
   * [MM-DD] : [events array]
   * event object is built by wiki api.
   */
  dates: {},
};

export default createStore(
  eventsReducer,
  defaultState,
  applyMiddleware(thunkMiddleware)
);
