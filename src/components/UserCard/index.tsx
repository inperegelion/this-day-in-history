import "./style.css";
const baseUrl = "https://birthday-api.anromsocial.com";

const UserCard = (props) => {
  const { user } = props;
  const { avatarUrl, birthday, jobTitle, name } = user;
  const hiringDate = new Date(birthday).toDateString().slice(4, 10);

  return (
    <li className="UserCard">
      <img
        className="UserCard-picture"
        src={`${baseUrl}${avatarUrl}`}
        alt={`${name} avatar`}
        title={name}
      />
      <section className="UserCard-description">
        <h3 className="UserCard-name">{name}</h3>
        <p className="UserCard-title">{jobTitle}</p>
        <p className="UserCard-date">{hiringDate}</p>
      </section>
    </li>
  );
};

export default UserCard;
