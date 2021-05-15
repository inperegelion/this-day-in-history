import EventCard from "../EventCard";

const EventsOfTheDay = (label, events) => {
  if (!events || !events.length) return <p>Oops, No events found yet...</p>;
  return (
    <div>
      <h2>{label}</h2>
      <ul>
        {events.map((event, i) => (
          <EventCard key={`event-card-${i}`} event={event} />
        ))}
      </ul>
    </div>
  );
};

export default EventsOfTheDay;
