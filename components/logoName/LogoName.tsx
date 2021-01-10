import React from 'react';
import './LogoName.scss';
import LogoImgDark from 'bloben-common/assets/logo-dark.svg';

interface ILogoNameProps {
  isDark?: boolean;
}
const LogoName = (props: ILogoNameProps) => {
  const { isDark } = props;

  return (
    <div className={'logo_name__row'}>
      <div className={'logo_name__icon'}>
        <img
          src={isDark ? LogoImgDark : LogoImgDark}
          className={'svg-logo'}
          alt={'blank'}
        />
      </div>
      <h3 className={'logo_name__title'}>Bloben</h3>
      <h2 className={'logo_name__subtitle'}>{process.env.REACT_APP_NAME}</h2>
    </div>
  );
};

export default LogoName;
