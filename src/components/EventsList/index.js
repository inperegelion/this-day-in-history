import { useEffect, useState } from "react";
import Loader from "../Loader";
import getEventsOnThisDay from "../../api/wiki/onthisday";
import "./style.css";
import EventCard from "../EventCard";

const EventsList = (props) => {
  let [isLoaded, setIsLoaded] = useState(false);
  let [events, setEvents] = useState([]);
  const { today, pastweek, nextweek } = props;

  useEffect(() => {
    async function pushEventsOfADay(dateObj) {
      const [mo, day] = [dateObj.getMonth() + 1, dateObj.getDate()];
      const data = await getEventsOnThisDay(mo, day);
      setIsLoaded(true);
      setEvents((events) => [...events, ...data]);
    }

    if (pastweek || nextweek) {
      // ForEach is the fastest iteration approach, According to https://jsben.ch/wY5fo
      const week = pastweek
        ? [-1, -2, -3, -4, -5, -6, -7]
        : [1, 2, 3, 4, 5, 6, 7];
      week.forEach((dDiff) => {
        const d = new Date();
        d.setDate(today.getDate() + dDiff);
        pushEventsOfADay(d);
      });
    } else pushEventsOfADay(today);
  }, [nextweek, pastweek, today]);

  const renderList = () => {
    if (!events || !events.length) return <p>Oops, No events for today...</p>;
    if (!isLoaded) return <Loader />;
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
