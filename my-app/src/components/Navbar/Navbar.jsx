import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName="s.item + ' ' + s.active">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName="active">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName="active">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
