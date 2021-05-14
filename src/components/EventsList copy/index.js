import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTodaysEvents, loadPrevWeek } from "../../redux/actions";

import EventCard from "../EventCard";
import "./style.css";

const EventsList = (props) => {
  const { today, pastweek, nextweek } = props;
  const dates = useSelector((state) => state.dates);
  const todayDate = useSelector((state) => state.today);
  const dispatch = useDispatch();
  console.log(dates);
  window.d = JSON.parse(JSON.stringify(dates));

  useEffect(() => {
    if (today) {
      dispatch(loadTodaysEvents(new Date()));
    } else if (pastweek) {
      dispatch(loadPrevWeek(new Date(), true));
    } else if (nextweek) {
      dispatch(loadPrevWeek(new Date(), false));
    }
  }, [dispatch, today, pastweek, nextweek]);

  const renderList = () => {
    const events = today ? dates[todayDate] : getEventsOfTimeSpan(dates);

    console.log(events);
    if (!events || !events.length) return <p>Oops, No events found yet...</p>;
    return (
      <>
        {events.map((event, i) => (
          <EventCard key={`event-card-${i}`} event={event} />
        ))}
      </>
    );
  };

  return (
    <div className="EventsList">
      <div className="EventsList-topGradient"> </div>
      {renderList()}
    </div>
  );
};

export default EventsList;

const getEventsOfTimeSpan = (datesDict, from, to) => {
  return Object.entries(datesDict).reduce(
    (acc, pair) => [...acc, ...pair[1]],
    []
  );
};
