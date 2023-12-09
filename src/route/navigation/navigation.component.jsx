import { Fragment, useContext } from "react";
import { ReactComponent as NavLogo } from "../../assets/images/logo.svg";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../context/UserProvider.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";


const Navigation = () => {

  const {currentUser, setCurrentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
      await signOutUser();
      setCurrentUser(null)
  }


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
            {currentUser ? 
            <span className="nav-link" onClick={signOutHandler}> sign out </span> :
            <Link to="/auth" className="nav-link">Sign In</Link>
            }
          </li>
          <CartIcon />
        </ul>
      </div>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
