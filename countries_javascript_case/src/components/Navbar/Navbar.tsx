import { NavLink, useLocation, Outlet } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div className="main">
      <nav className="main__nav">
        <ul className="main__routes">
          <li className="main__route">
            <NavLink to="/">Country List</NavLink>
          </li>
          <li className="main__route">
            <NavLink to="/with-datatable">Countries with Datatable</NavLink>
          </li>
        </ul>
      </nav>
      <main className="main__container">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
