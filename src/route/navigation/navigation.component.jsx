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
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <NavLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
