import { Fragment, useContext } from "react";
import { ReactComponent as NavLogo } from "../../assets/images/logo.svg";
import { Outlet } from "react-router-dom";
import { NavigationContainer,LogoContainer, NavLinkContainer, NavLink } from "./navigation.style";


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
      <NavigationContainer>
        <LogoContainer  to='/'>
          <NavLogo />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
