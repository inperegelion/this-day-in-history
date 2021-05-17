import { useEffect, useState } from "react";
import UserCard from "../UserCard";
import getAnniversaries from "../../api/users/b-days";
import "./style.css";

// Tab statuses:
const [LOADING, EMPTY, LOADED] = ["LOADING", "EMPTY", "LOADED"];

const AnniversaryTab = (props) => {
  const { tab } = props;
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(LOADING);

  useEffect(() => {
    const today = new Date();

    let dateFrom, dateTo;

    switch (tab) {
      case "TODAY":
        dateFrom = formattDate(today);
        break;

      case "PAST_DATES":
        dateFrom = addDaysAndFormat(today, -7);
        dateTo = addDaysAndFormat(today, -1);
        break;
      case "NEXT_DATES":
        dateFrom = addDaysAndFormat(today, 1);
        dateTo = addDaysAndFormat(today, 7);
        break;
      default:
        break;
    }

    async function fetchUsers(dateFrom, dateTo) {
      setStatus(LOADING);
      const usersData = await getAnniversaries(dateFrom, dateTo);
      // TODO: sort array alphabetically with .sort((a, b) => (a[0] < b[0] ? 1 : -1))
      console.log(usersData);
      setUsers(usersData);
      setStatus(usersData.length > 0 ? LOADED : EMPTY);
    }
    fetchUsers(dateFrom, dateTo);
  }, [tab]);

  switch (status) {
    case LOADING:
      return <p className="AnniversaryTab-loading">Loading...</p>;
    case EMPTY:
      return (
        <p className="AnniversaryTab-empty-msg">
          Unfortunately, there are no users who have anniversary on these dates
        </p>
      );
    case LOADED:
      return (
        <ul className="Users-list">
          {users.map((user, i) => (
            <UserCard user={user} key={`card-${i}-of-user-${user.id}`} />
          ))}
        </ul>
      );

    default:
      return <p>Unpredicted error happened</p>;
  }
};

export default AnniversaryTab;

function addDaysAndFormat(date, diff) {
  var tempDate = new Date(date);
  tempDate.setDate(tempDate.getDate() + diff);
  return formattDate(tempDate);
}

function formattDate(date) {
  const strMMdd = date.toISOString().slice(5, 10);
  return `${strMMdd.slice(0, 2)}.${strMMdd.slice(3)}`;
}
