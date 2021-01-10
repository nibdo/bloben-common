import React from 'react';

import './Logo.scss';
import LogoIcon from '../logoIcon/LogoIcon';
import { parseCssDark } from 'bloben-common/utils/common';

interface ILogoProps {
    imageClassName?: string;
    textClassName?: string;
    isDark: boolean;
}
const Logo = (props: ILogoProps) => {
  const { imageClassName, textClassName, isDark } = props;

  const logoTextClassName: string = !textClassName ? 'logo__text' : textClassName;
  const logoImageClassName: string = !imageClassName ? 'logo__image' : imageClassName;

  return (
      <div className={'logo__container'}>
          <LogoIcon className={parseCssDark(logoImageClassName, isDark)}/>
        <h3 className={parseCssDark(logoTextClassName, isDark)}>Bloben</h3>
      </div>
  );
};

export default Logo;
