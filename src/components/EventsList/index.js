import { useEffect, useState } from "react";
import Loader from "../Loader";
import getEventsOnThisDay from "../../api/wiki/onthisday";
import "./style.css";
import EventCard from "../EventCard";

const EventsList = (today, pastweek, nextweek) => {
  let [isLoaded, setIsLoaded] = useState(false);
  let [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      setIsLoaded(true);
      const data = await getEventsOnThisDay();
      setEvents(data);
    }
    getEvents();
  }, []);

  const renderList = () => {
    if (!events.length) return <p>Oops, No events for today...</p>;
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
