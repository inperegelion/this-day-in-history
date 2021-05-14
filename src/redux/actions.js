import {
  SET_TODAY_DATE,
  SET_TODAYS_EVENTS,
  SET_EVENTS_ON_DATE,
} from "./actionTypes";
import getEventsOnThisDay from "../api/wiki/onthisday";

export const setTodaysDate = (date) => {
  return {
    type: SET_TODAY_DATE,
    payload: { date: date.toISOString().slice(5, 10) },
  };
};

export const setTodaysEvents = (events) => {
  return { type: SET_TODAYS_EVENTS, payload: { events } };
};

export const setEventsOnDate = (dateID, events) => {
  return { type: SET_EVENTS_ON_DATE, payload: { dateID, events } };
};

export const loadPrevWeek = (date = new Date(), prev) => {
  return (dispatch) => {
    const weekDiff = prev
      ? [-1, -2, -3, -4, -5, -6, -7]
      : [1, 2, 3, 4, 5, 6, 7];

    weekDiff.forEach(async (diff) => {
      const weekDate = new Date();
      weekDate.setDate(date.getDate() + diff);

      const events = await getEventsOnThisDay(
        weekDate.getMonth() + 1,
        weekDate.getDate()
      );
      dispatch(setEventsOnDate(weekDate.toISOString().slice(5, 10), events));
    });
  };
};

export const loadTodaysEvents = (date = new Date()) => {
  return (dispatch) => {
    async function fetchWrapper() {
      const events = await getEventsOnThisDay(
        date.getMonth() + 1,
        date.getDate()
      );
      dispatch(setTodaysEvents(events));
    }
    fetchWrapper();
  };
};
