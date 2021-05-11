import "./style.css";

const EventCard = (event) => {
  const ev = event.event;
  const { text, year } = ev;
  const imgSrc = ev?.pages[0]?.thumbnail?.source;
  const imgTitle = ev?.pages[0]?.displaytitle;

  return (
    <article className="EventCard">
      <img className= "EventCard-picture"src={imgSrc} alt={imgTitle} title={imgTitle} />
      <section className= "EventCard-description">
        <h3 className= "EventCard-year">{year}</h3>
        <p className= "EventCard-text">{text}</p>
      </section>
    </article>
  );
};

export default EventCard;
