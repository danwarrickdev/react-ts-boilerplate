import { NavLink } from "react-router";
export const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sample">Sample</NavLink>
    </nav>
  );
};
