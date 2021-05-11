import { NavLink } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const tabs = [
    { to: "/past-week", title: "Past week" },
    { to: "/", title: "Today" },
    { to: "/next-week", title: "Next week" },
  ];

  const renderLink = (to, title) => (
    <NavLink
      key={`tab-link-to-${to}`}
      to={to}
      exact
      className="NavLink"
      activeStyle={{
        background: "rgba(91, 91, 91, 0.1)",
        borderBottom: "3px solid #FF0000",
      }}>
      {title}
    </NavLink>
  );

  return (
    <nav className="NavTabs">
      {tabs.map((tab) => renderLink(tab.to, tab.title))}
    </nav>
  );
};

export default Nav;
