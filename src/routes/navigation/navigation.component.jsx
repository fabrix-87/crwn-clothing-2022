import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { isCartIconOpen } from '../../store/cart/cart.selectors';
import { selectCurrentUser } from '../../store/user/user.selectors';

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(isCartIconOpen);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          { currentUser ? ('Welcome: '+ currentUser.displayName) : '' }
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon/>
        </div>
        { isCartOpen && <CartDropdown/> }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
