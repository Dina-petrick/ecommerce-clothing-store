import { Fragment } from "react";
import { ReactComponent as NavLogo } from "../../assets/images/logo.svg";
import { Outlet, Link } from "react-router-dom";

import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link to="/">
          <NavLogo className="nav-logo" />
        </Link>
        <ul className="nav-link-container">
          <li className="nav-link">
            <Link to="/shop">shop</Link>
          </li>
          <li className="nav-link">
            <Link to="/auth">sign in</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
