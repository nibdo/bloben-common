import React, { useState, useEffect } from 'react';
import './InputForm.scss';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { IconButton } from '@material-ui/core';

interface IPasswordIconProps {
  textType: string;
  handlePasswordIcon: any;
  isDark?: boolean;
}

const PasswordIcon = (props: IPasswordIconProps) => (
    <div className={'password-icon__wrapper'}>
    <p className={'input_form__label'} style={{color: 'transparent'}}>
      {'.'}
    </p>
    <div className={'password-icon__container'}>
    {props.textType === 'text' ? (
      <IconButton onClick={props.handlePasswordIcon}>
        <VisibilityOffIcon className={'password-icon__icon'}/>
      </IconButton>
    ) : (
      <IconButton onClick={props.handlePasswordIcon} >
        <VisibilityIcon className={'password-icon__icon'}/>
      </IconButton>
    )}
    </div>
  </div>
);

interface IInputFormProps {
  isPassword?: boolean;
  name: string;
  onChange: any;
  value: string;
  label?: string;
  autoComplete?: string;
  onFocus?: any;
  autoFocus?: boolean;
  onBlur?: any;
  isDark?: boolean;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  onKeyPress?: any;
  submitEnter?: any;
  error?: string;
}

const InputForm = (props: IInputFormProps) => {
  const [textType, setTextType] = useState('text');
  const [labelAnimation, setLabelAnimation] = useState('');

  const {
    isPassword,
    name,
    onChange,
    value,
    label,
    onKeyPress,
    submitEnter,
    autoFocus,
    autoComplete,
    placeholder,
    onFocus,
    onBlur,
    isDark,
    defaultValue,
    maxLength,
    error
  } = props;

  useEffect(() => {
    if (value && value.length > 0) {
      setLabelAnimation('animate-label-up')
    }

    props.isPassword ? setTextType('password') : setTextType('text');
  },        []);

  const handlePasswordIcon = () => {
    if (textType === 'text') {
      setTextType('password');
    } else {
      setTextType('text');
    }
  };

  const handleOnFocus = () => {
    setLabelAnimation('animate-label-up')

    if (onFocus) {
      onFocus()
    }
  }
  const handleOnBlur = () => {
    if (defaultValue) {
      return;
    }

    if (value && value.length < 1) {
      setLabelAnimation('animate-label-down')
    }
    if (onBlur) {
      onBlur()
    }
  }

  return (
    <div className={'input_form__wrapper'}>
      <p className={`input_form__label${isDark ? '--dark' : ''} ${defaultValue ? 'input-label-up-default' : labelAnimation}`}>
        {label}
      </p>
      {defaultValue ?
          <input
              className={`input_form__input${isPassword ? '--password' : ''}${
                  isDark ? '--dark' : ''
              }`}
              name={name}
              type={textType}
              placeholder={placeholder}
              defaultValue={defaultValue}
              disabled={true}
          />
      :     <input
              className={`input_form__input${isPassword ? '--password' : ''}${
                  isDark ? '--dark' : ''
              }`}
              name={props.name}
              type={textType}
              placeholder={placeholder}
              onChange={onChange}
              autoFocus={autoFocus}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              value={props.value}
              maxLength={maxLength}
              autoComplete={autoComplete}
              onKeyPress={(ev) => {
                if (submitEnter) {
                  if (ev.key === 'Enter') {
                    submitEnter();
                    ev.preventDefault();
                  }
                } else if (props.onKeyPress) {
                  onKeyPress(ev.key)
                }
              }}
          />}

      {isPassword ? (
        <PasswordIcon
            isDark={isDark}
            handlePasswordIcon={handlePasswordIcon}
            textType={textType}
        />
      ) : null}
      {error ? (
        <div style={{ bottom: -10 }}>
          <p className={`input_form__label--error${isDark ? '--dark' : ''}`}>
            {error}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default InputForm;
