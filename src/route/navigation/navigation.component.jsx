import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as NavLogo } from "../../assets/images/logo.svg";
import { Outlet } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
  NavTextButton,
  ModalOverlay,
  ModalDialog,
  ModalTitle,
  ModalText,
  ModalActions,
  ModalCancelButton,
  ModalConfirmButton,
} from "./navigation.style";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../context/UserProvider.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";


const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [signOutModalOpen, setSignOutModalOpen] = useState(false);
  const confirmButtonRef = useRef(null);

  useEffect(() => {
    if (!signOutModalOpen) return;
    const t = setTimeout(() => confirmButtonRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [signOutModalOpen]);

  useEffect(() => {
    if (!signOutModalOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSignOutModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [signOutModalOpen]);

  const confirmSignOut = async () => {
    setSignOutModalOpen(false);
    await signOutUser();
  };


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
            <NavTextButton type="button" onClick={() => setSignOutModalOpen(true)}>
              SIGN OUT
            </NavTextButton>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      {signOutModalOpen &&
        createPortal(
          <ModalOverlay
            role="presentation"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setSignOutModalOpen(false);
            }}
          >
            <ModalDialog
              role="dialog"
              aria-modal="true"
              aria-labelledby="signout-dialog-title"
              onMouseDown={(e) => e.stopPropagation()}
            >
              <ModalTitle id="signout-dialog-title">Sign out?</ModalTitle>
              <ModalText>
                You will need to sign in again to access your account and
                complete payment.
              </ModalText>
              <ModalActions>
                <ModalCancelButton
                  type="button"
                  onClick={() => setSignOutModalOpen(false)}
                >
                  Cancel
                </ModalCancelButton>
                <ModalConfirmButton
                  ref={confirmButtonRef}
                  type="button"
                  onClick={confirmSignOut}
                >
                  Sign out
                </ModalConfirmButton>
              </ModalActions>
            </ModalDialog>
          </ModalOverlay>,
          document.body
        )}

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
