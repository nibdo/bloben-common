import React, { useEffect, useState } from 'react';
import { Button, ButtonBase, IconButton } from '@material-ui/core';
import './Landing.scss';
import Logo from '../logo/Logo';
import _ from 'lodash';
import { HeightHook } from 'bloben-common/utils/layout';
import { useHistory } from 'react-router';
import EvaIcons from '../eva-icons';
import { VpnKey } from '@material-ui/icons';
import RedditIcon from 'bloben-common/assets/reddit.svg';
import TwitterIcon from 'bloben-common/assets/twitter.svg';
import GithubIcon from 'bloben-common/assets/github.svg';
import { parseCssDark } from '../../utils/common';

const handleScrollTo = (idName: string): void => {
  const element: any = document.getElementById(idName);

  element.scrollIntoView({ behavior: 'smooth' });
};

const Landing: any = {
  Wrapper: (props: any) => (
    <div className={'landing__wrapper'} id={props.id} style={props.style}>
      {props.children}
    </div>
  ),
  OneScreen: (props: any) => {
    const height: number = HeightHook();

    return (
      <div
        className={'landing__wrapper'}
        id={props.id}
        style={{ background: props.background }}
      >
        <div className={'landing__one-screen'} style={{ height }}>
          {props.children}
        </div>
      </div>
    );
  },
  FreeLayout: (props: any) => (
    <div className={'landing__free-layout'} id={props.id}>
      {props.children}
    </div>
  ),
  NavbarDesktop: (props: any) => {
    const { isMobile, username, onDemoButtonClick, page } = props;

    return (
      <div className={'landing__navbar-container'}>
        <div
          className={'landing__navbar-link'}
          onClick={() => handleScrollTo('home')}
        >
          <p
            className={`landing__navbar-text${
              page === 'home' ? '-active' : ''
            }`}
          >
            Home
          </p>
        </div>
        <div
          className={'landing__navbar-link'}
          onClick={() => handleScrollTo('about')}
        >
          <p className={'landing__navbar-text'}>About</p>
        </div>
        <div
          className={'landing__navbar-link'}
          onClick={() => handleScrollTo('footer')}
        >
          <p className={'landing__navbar-text'}>Contact</p>
        </div>
        <div
          className={'landing__navbar-link'}
          onClick={() => handleScrollTo('donate')}
        >
          <p
            className={`landing__navbar-text${
              page === 'donate' ? '-active' : ''
            }`}
          >
            Donate
          </p>
        </div>
        {!isMobile ? (
          !username ? (
            <div className={'landing__navbar-container-end'}>
              <Landing.LoginButton />
              <Landing.RegisterButton />
            </div>
          ) : (
            <div className={'landing__navbar-container-end'}>
              <Landing.LogoutButton />
            </div>
          )
        ) : !username ? (
          <div className={'landing__navbar-container-end'}>
            <Landing.DemoButton small onDemoButtonClick={onDemoButtonClick} />
          </div>
        ) : null}
      </div>
    );
  },
  NavbarDesktopMainApp: (props: any) => {
    const { page } = props;
    const history: any = useHistory();

    const navigateTo = (pagePath: string): void => history.push(pagePath);

    return (
      <div className={'landing__navbar-container'}>
        <div className={'landing__navbar-link'} onClick={() => navigateTo('/')}>
          <p
            className={`landing__navbar-text${
              page === 'home' ? '-active' : ''
            }`}
          >
            Home
          </p>
        </div>
        <div
          className={'landing__navbar-link'}
          onClick={() => navigateTo('/about')}
        >
          <p
            className={`landing__navbar-text${
              page === 'about' ? '-active' : ''
            }`}
          >
            About
          </p>
        </div>
        <div
          className={'landing__navbar-link'}
          onClick={() => navigateTo('/donate')}
        >
          <p
            className={`landing__navbar-text${
              page === 'donate' ? '-active' : ''
            }`}
          >
            Donate
          </p>
        </div>
      </div>
    );
  },
  HeaderNavbar: (props: any) => {
    const { username, isDark, isMobile, isMainApp, onDemoButtonClick, page } = props;

    const [isScrolled, setScrolled] = useState(false);
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
    const checkScroll: any = _.debounce(() => {
      const element: any = document.getElementById('intro_wrapper');

      if (element.scrollTop !== 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    useEffect(() => {
      window.addEventListener('scroll', checkScroll, true);

      return () => {
        window.removeEventListener('scroll', checkScroll, true);
      };
    },        []);

    return (
      <div className={`landing__header-navbar${isScrolled ? '-border' : ''}`}>
        <Logo isDark={isDark}/>
        {isMainApp && !isMobile ? (
          <Landing.NavbarDesktopMainApp
            isMobile={isMobile}
            username={username}
            onDemoButtonClick={onDemoButtonClick}
            page={page}
          />
        ) : !isMobile ? (
          <Landing.NavbarDesktop
            isMobile={isMobile}
            username={username}
            onDemoButtonClick={onDemoButtonClick}
            page={page}
          />
        ) : !isMainApp ? (
          <div className={'landing__navbar-container'}>
            <div className={'landing__navbar-container-end'}>
              <Landing.DemoButton small onDemoButtonClick={onDemoButtonClick} />
            </div>
          </div>
        ) : null}
        {isMobile && isMainApp ? (
          <div
            className={'landing__navbar-container-end'}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: 64,
              width: '100%',
            }}
          >
            {isMobileNavbarOpen ? (
              <IconButton onClick={() => setIsMobileNavbarOpen(false)}>
                <EvaIcons.Cross className={'icon-svg'} />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsMobileNavbarOpen(true)}>
                <EvaIcons.Menu className={'icon-svg'} />
              </IconButton>
            )}
          </div>
        ) : null}
      </div>
    );
  },
  HeaderLogo: (props: any) => (
    <div className={'landing__header-logo'}>
      <Logo isDark={props.isDark}/>
      <h4 className={'landing__title'}>Bloben</h4>
    </div>
  ),
  Subtitle: (props: any) => (
    <div className={'landing__subtitle-container'}>
      <h2 className={'landing__subtitle-text'}>{props.subtitle}</h2>
      <h6 className={'landing__subtitle-description'}>{props.description}</h6>
    </div>
  ),
  ContainerRow: (props: any) => {
    const { isKeyboardUp, style } = props;

    return (
      <div
        className={`landing__container-row ${
          isKeyboardUp ? '-keyboard-padding' : ''
        }`}
        style={style}
      >
        {props.children}
      </div>
    );
  },
  ContainerRowPart: (props: any) => (
    <div className={'landing__container-row-part'}>{props.children}</div>
  ),
  Container: (props: any) => (
    <div className={`landing__container${props.content ? props.content : ''}`}>
      {props.children}
    </div>
  ),
  ContainerColumn: (props: any) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {props.children}
    </div>
  ),
  ContainerForm: (props: any) => (
    <div className={'landing__container-form'}>{props.children}</div>
  ),
  BackgroundImage: (props: any) => (
    <div className={'landing__background-image'}>
      <img
        className={'landing__image'}
        src={props.image}
        alt={'landing__image'}
      />
    </div>
  ),
  Text: (props: any) => <p className={'landing__text'}>{props.text}</p>,
  Body: (props: any) => (
    <p className={'landing__body-text'}>{props.children}</p>
  ),
  MainText: (props: any) => (
    <p className={'landing__body-main-text'}>{props.children}</p>
  ),
  SubMainText: (props: any) => (
    <p className={'landing__body-sub-main-text'}>{props.children}</p>
  ),
  Image: (props: any) => (
    <div className={'landing__image-wrapper'}>
      <img
        className={'landing__image'}
        src={props.image}
        alt={'landing__image'}
      />
    </div>
  ),
  Header: (props: any) => (
    <div className={'landing__header-container'}>
      <div className={'landing__header-text-col'}>
        <h3 className={'landing__header-title'}>Bloben</h3>
        <h6 className={'landing__header-subtitle'}>productive and private</h6>
      </div>
    </div>
  ),
  Title: (props: any) => {
    const { title } = props;

    return <h4 className={'landing__form-title'}>{title}</h4>;
  },
  Footer: () => (
    <div className={'landing__footer-container'} id={'footer'}>
      <a className={'landing__footer-text'} href={'https://bloben.com/terms'}>
        Terms of use
      </a>
      <a className={'landing__footer-text'} href={'https://bloben.com/privacy'}>
        Privacy policy
      </a>
      <a className={'landing__footer-text'} href={'mailto:hello@nibdo.com'}>
        hello@nibdo.com
      </a>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <a
          className={'landing__footer-text'}
          target='_blank'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          href={'https://bloben.com/public.pgp'}
        >
          <VpnKey
            style={{ fill: '#eeeeee', marginRight: 8, fontSize: '1.8rem' }}
          />
          PGP key
        </a>
      </div>
    </div>
  ),
  FooterExtended: () => (
    <div className='footer-row'>
      <div className='footer-social'>
        <a href='https://twitter.com/bloben7' target='blank'>
          <div className='social-circle-twitter'>
            <img
              src={TwitterIcon}
              className={'icon-social'}
              style={{ width: 30, height: 30 }}
            />
          </div>
        </a>
        <a href='https://www.reddit.com/r/Bloben/' target='blank'>
          <div className='social-circle-reddit'>
            <img
              src={RedditIcon}
              className={'icon-social'}
              style={{ width: 30, height: 30 }}
            />
          </div>
        </a>
        <a href='https://github.com/nibdo?tab=repositories' target='blank'>
          <div className='social-circle-github'>
            <img
              src={GithubIcon}
              className={'icon-social'}
              style={{ width: 30, height: 30 }}
            />
          </div>
        </a>
      </div>
    </div>
  ),
  Separator: () => <div className={'landing__separator'} />,
  ButtonPrimary: (props: any) => {
    const { title, onClick, isDark } = props;

    return (
      <Button className={parseCssDark('landing__button-primary', isDark)} onClick={onClick}>
        {title}
      </Button>
    );
  },
  ButtonSecondary: (props: any) => {
    const { title, onClick } = props;

    return (
      <Button className={'landing__button-secondary'} onClick={onClick}>
        {title}
      </Button>
    );
  },
  LoginButton: (props: any) => {
    const handleClick = () => window.location.assign('/login');

    return (
      <ButtonBase
        className={`button__login${props.wide ? '-wide' : ''}`}
        onClick={handleClick}
      >
        Login
      </ButtonBase>
    );
  },
  LogoutButton: (props: any) => (
    <ButtonBase className={'button__login'} onClick={props.handleLogout}>
      Logout
    </ButtonBase>
  ),
  RegisterButton: (props: any) => {
    const handleClick = () => window.location.assign('/register');

    return (
      <ButtonBase
        className={`button__register${props.wide ? '-wide' : ''}`}
        onClick={handleClick}
      >
        Register
      </ButtonBase>
    );
  },
  DefaultButton: (props: any) => (
    <ButtonBase className={'button__demo'} onClick={props.onClick}>
      {props.title}
    </ButtonBase>
  ),
  DisabledButton: (props: any) => (
    <ButtonBase className={'button__disabled'} onClick={props.onClick} disabled>
      {props.title}
    </ButtonBase>
  ),
  DemoButton: (props: any) => (
    <ButtonBase
      className={props.small ? 'button__login' : 'button__demo'}
      onClick={props.onDemoButtonClick}
    >
      Try demo
    </ButtonBase>
  ),
};

export default Landing;
