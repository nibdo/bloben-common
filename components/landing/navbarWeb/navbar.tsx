import React from 'react';

import './navbar.scss';
import { useHistory } from 'react-router';
import Landing from 'bloben-common/components/landing/Landing';

const NavbarWebMobile = (props: any) => {
  const { page, handleClose } = props;
  const history: any = useHistory();

  const linkStyle: any = {
    width: '100%',
    height: 40,
  };

  const handleNavigate = (path: string): void => {
    if (
      page === path.slice(1) ||
      (page === 'home' && path === '/') ||
      (page === 'home' && path === '')
    ) {
      handleClose();
    } else {
      history.push(path);
    }
  };

  return (
    <div className={'navbar__container-web'}>
      <div
        className={`landing__navbar-link-web`}
        style={linkStyle}
        onClick={() => handleNavigate('/')}
      >
        <p
          className={`landing__navbar-text-web${
            page === 'home' ? '-active' : ''
          }`}
        >
          Home
        </p>
      </div>
      <div
        className={`landing__navbar-link-web`}
        style={linkStyle}
        onClick={() => handleNavigate('/about')}
      >
        <p
          className={`landing__navbar-text-web${
            page === 'about' ? '-active' : ''
          }`}
        >
          About
        </p>
      </div>
      <Landing.Separator />
    </div>
  );
};

export default NavbarWebMobile;
