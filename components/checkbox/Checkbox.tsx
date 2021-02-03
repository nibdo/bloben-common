import { ButtonBase } from '@material-ui/core';
import React from 'react';

import './Checkbox.scss';
import EvaIcons from '../eva-icons';

interface ICheckboxProps {
  handleClick: any;
  value: boolean;
  name: string;
  isDark: boolean;
  text?: any;
}
const Checkbox = (props: ICheckboxProps) => {
  const { handleClick, value, name, isDark, text } = props;

  const onClick = (): void => {
    handleClick(name, !value)
  }

  return (
      <div className={'checkbox__container'}>
    <ButtonBase
      className={'checkbox__icon-container'}
      onClick={onClick}
    >
      {value ? (
        <EvaIcons.Check
          className={`svg-icon checkbox__icon-selected${isDark ? '-dark' : ''}`}
        />
      ) : (
        <EvaIcons.Check
          className={`svg-icon checkbox__icon${isDark ? '-dark' : ''}`}
        />
      )}
    </ButtonBase>
        <p className={`checkbox__text${isDark ? '-dark' : ''}`}>{text}</p>
      </div>
  );
};

export default Checkbox;
