import { NavLink } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const tabs = [
    {
      to: "/past-week",
      title: (
        <span>
          PAST <br /> dates
        </span>
      ),
    },
    { to: "/", title: "TODAY" },
    {
      to: "/next-week",
      title: (
        <span>
          NEXT <br /> dates
        </span>
      ),
    },
  ];

  const renderLink = (to, title) => (
    <NavLink
      key={`tab-link-to-${to}`}
      to={to}
      exact
      className="NavLink"
      activeStyle={{
        fontFamily: "VodafoneRgBd, sans-serif",
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
