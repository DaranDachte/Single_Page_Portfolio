import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between">
      <NavLink to="/tinyApps">TinyApps</NavLink>
      <NavLink to="/apiApps">ApiApps</NavLink>
      <NavLink to="/reduxApps">ReduxApps</NavLink>
      <NavLink to="/RouterApps">RouterApps</NavLink>
    </nav>
  );
};

export default Navigation;
