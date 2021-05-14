import {
  SET_TODAY_DATE,
  SET_TODAYS_EVENTS,
  SET_EVENTS_ON_DATE,
} from "./actionTypes";

export const eventsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TODAY_DATE:
      return { ...state, today: action.payload.date };

    case SET_TODAYS_EVENTS:
      return {
        ...state,
        dates: {
          ...state.dates,
          [state.today]: action.payload.events,
        },
      };
    case SET_EVENTS_ON_DATE:
      return {
        ...state,
        dates: {
          ...state.dates,
          [action.payload.dateID]: action.payload.events,
        },
      };
    default:
      return state;
  }
};
