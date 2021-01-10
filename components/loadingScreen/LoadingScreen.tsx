import React from 'react';
import './LoadingScreen.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

interface ILoader {
    isDark?: boolean;
}
const LoaderBig = (props: ILoader) => {
    const {isDark} = props;

    return <div className={`loading-screen__wrapper${isDark ? '-dark' : ''}`}>
        <CircularProgress
            className={`loading-screen__spinner${isDark ? '-dark' : ''}`}
        />
        <p className={`loading-screen__text${isDark ? '-dark' : ''}`}>Loading</p>
    </div>
}

const LoaderSmall = (props: ILoader) => {
    const {isDark} = props;

    return <div className={`loading-screen__container${isDark ? '-dark' : ''}`}>
        <CircularProgress
            className={`loading-screen__spinner${isDark ? '-dark' : ''}`}
        />
    </div>
}

interface ILoadingScreenProps {
    small?: boolean;
}
const LoadingScreen = (props: ILoadingScreenProps) => {
    const {small} = props;

    return (
      small ? <LoaderSmall/> : <LoaderBig/>
  );
};

export default LoadingScreen;
