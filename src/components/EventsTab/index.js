import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodaysEvents, loadPrevWeek } from "../../redux/actions";
import {
  selectNextWeek,
  selectPastWeek,
  selectTodayEvents,
} from "../../redux/selectors";

import EventsOfTheDay from "../EventsOfTheDay";
import "./style.css";

const EventsTab = (props) => {
  const { today, pastweek, nextweek } = props;

  const nextWeek = useSelector(selectNextWeek);
  const todayEvents = useSelector(selectTodayEvents);
  const pastWeek = useSelector(selectPastWeek);
  const todayDate = useSelector((state) => state.today);

  const dispatch = useDispatch();

  useEffect(() => {
    if (today) {
      dispatch(loadTodaysEvents(new Date()));
    } else if (pastweek) {
      dispatch(loadPrevWeek(new Date(), true));
    } else if (nextweek) {
      dispatch(loadPrevWeek(new Date(), false));
    }
  }, [dispatch, today, pastweek, nextweek]);

  const renderTab = () => {
    // how WET this code is 🤢...
    if (today) {
      return (
        <EventsOfTheDay
          label={todayDate}
          events={todayEvents[todayDate]}
          i={0}
        />
      );
    } else if (pastweek) {
      return (
        <ul className="Days-list">
          {Object.entries(pastWeek)
            .sort((a, b) => (a[0] < b[0] ? 1 : -1))
            .map((pair, i) => (
              <EventsOfTheDay
                key={`events-of-the-day-${pair[0]}`}
                label={pair[0]}
                events={pair[1]}
                i={i}
              />
            ))}
        </ul>
      );
    } else if (nextweek) {
      return (
        <ul className="Days-list">
          {Object.entries(nextWeek)
            .sort((a, b) => (a[0] > b[0] ? 1 : -1))
            .map((pair, i) => (
              <EventsOfTheDay
                key={`events-of-the-day-${pair[0]}`}
                label={pair[0]}
                events={pair[1]}
                i={i}
              />
            ))}
        </ul>
      );
    }
  };

  return (
    <div className="EventsTab">
      <div className="EventsTab-topGradient"> </div>
      {renderTab()}
    </div>
  );
};

export default EventsTab;
