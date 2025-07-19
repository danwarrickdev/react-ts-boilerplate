import { NavLink } from "react-router";
import { useTheme } from "../../providers/ThemeProvider";

export const Header = () => {
  const { setIsDark } = useTheme();
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sample">Sample</NavLink>
      </nav>
      <button onClick={() => setIsDark(false)}>Light Mode</button>
      <button onClick={() => setIsDark(true)}>Dark Mode</button>
    </div>
  );
};
