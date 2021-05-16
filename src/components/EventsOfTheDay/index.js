import { useEffect, useState } from "react";
import EventCard from "../EventCard";
import "./style.css";

const EventsOfTheDay = (props) => {
  const { label, events, i } = props;
  const [isFolded, setIsFolded] = useState(true);
  const [isLimited, setIsLimited] = useState(true);

  useEffect(() => {
    if (i === 0) setIsFolded(false);
  }, [i]);

  if (!events || !events.length)
    return <p>Oops, No events for this date yet...</p>;
  return (
    <div className="EventsOfTheDay">
      <h2 className="EventsOfTheDay-Label">{label}</h2>
      <button
        className={`EventsOfTheDay-Fold-Btn ${
          isFolded ? "unfolded" : "folded"
        }`}
        onClick={() => setIsFolded(!isFolded)}>
        {isFolded ? "show" : "fold"}
      </button>
      {isFolded ? null : (
        <ul className="EventsOfTheDay-ul">
          {(isLimited ? events.slice(0, 10) : events).map((event, i) => (
            <EventCard key={`event-card-${i}`} event={event} />
          ))}
          {events.length > 10 ? (
            isLimited ? (
              <button
                className="EventsOfTheDay-showless-btn"
                onClick={() => setIsLimited(false)}>
                Show More
              </button>
            ) : (
              <button
                className="EventsOfTheDay-showless-btn"
                onClick={() => setIsLimited(true)}>
                Show Less
              </button>
            )
          ) : null}
        </ul>
      )}
    </div>
  );
};

export default EventsOfTheDay;
