import { useEffect, useState } from "react";
import EventCard from "../EventCard";
import "./style.css";

const EventsOfTheDay = (props) => {
  const { label, events, i } = props;
  const [isFolded, setIsFolded] = useState(true);

  useEffect(() => {
    if (i === 0) setIsFolded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!events || !events.length)
    return <p>Oops, No events for this date yet...</p>;

  return (
    <div className="EventsOfTheDay">
      <h2 className="EventsOfTheDay-Label">{label}</h2>
      <button
        className={`EventsOfTheDay-Fold-Btn ${isFolded ? "unfolded" : "folded"}`}
        onClick={() => setIsFolded(!isFolded)}>
        {isFolded ? "show" : "fold"}
      </button>
      {isFolded ? null : (
        <ul className="EventsOfTheDay-ul">
          {events.map((event, i) => (
            <EventCard key={`event-card-${i}`} event={event} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsOfTheDay;
