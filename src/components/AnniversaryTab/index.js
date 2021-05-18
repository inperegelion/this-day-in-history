import { useEffect, useState } from "react";
import UserCard from "../UserCard";
import getAnniversaries from "../../api/users/b-days";
import chevron from "../../assets/icons/chevron-right.svg";
import "./style.css";

// Tab statuses:
const [LOADING, EMPTY, LOADED] = ["LOADING", "EMPTY", "LOADED"];

const AnniversaryTab = (props) => {
  const { tab } = props;
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(LOADING);
  const [usersToShow, showMoreUsers] = useState(10);

  useEffect(() => {
    const today = new Date();

    let dateFrom, dateTo;

    switch (tab) {
      case "TODAY":
        dateFrom = formattDate(today);
        break;

      case "PAST_DATES":
        dateFrom = addDaysAndFormat(today, -14);
        dateTo = addDaysAndFormat(today, -1);
        break;
      case "NEXT_DATES":
        dateFrom = addDaysAndFormat(today, 1);
        dateTo = addDaysAndFormat(today, 14);
        break;
      default:
        break;
    }

    async function fetchUsers(dateFrom, dateTo) {
      setStatus(LOADING);
      const usersData = await getAnniversaries(dateFrom, dateTo);

      setUsers(
        usersData
          .map((user) => ({
            ...user,
            hiringDate: new Date(user.birthday).toISOString().slice(5, 10),
          }))
          .sort((a, b) => {
            if (tab === "TODAY") return a["name"] > b["name"] ? 1 : -1;
            if (tab === "PAST_DATES")
              return a["hiringDate"] < b["hiringDate"] ? 1 : -1;
            if (tab === "NEXT_DATES")
              return a["hiringDate"] > b["hiringDate"] ? 1 : -1;
            throw new Error("W");
          })
      );
      showMoreUsers(10);
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
        <>
          <ul className="Users-list">
            {users.slice(0, usersToShow).map((user, i) => (
              <UserCard user={user} key={`card-${i}-of-user-${user.id}`} />
            ))}
          </ul>
          {users.length > usersToShow ? (
            <button
              className="AnniversaryTab-showmore"
              onClick={() => showMoreUsers((prevState) => prevState + 10)}>
              Show more <img src={chevron} alt="arrow" />
            </button>
          ) : null}
        </>
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

function SortUsersForTab(a, b, tab) {
  if (tab === "TODAY") return a["name"] > b["name"] ? 1 : -1;
  if (tab === "PAST_DATES") return a["hiringDate"] > b["hiringDate"] ? 1 : -1;
  if (tab === "NEXT_DATES") return a["hiringDate"] < b["hiringDate"] ? 1 : -1;
  throw new Error("W");
}
