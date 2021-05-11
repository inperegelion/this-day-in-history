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

  return (
    <div className="EventsList">
      <div className="EventsList-topGradient">{" "}</div>
      {isLoaded ? (
        events.map((event, i) => (
          <EventCard key={`event-card-${i}`} event={event} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EventsList;
