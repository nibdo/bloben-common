import React from 'react';
import './LoadingScreen.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import { parseCssDark } from '../../utils/common';

interface ILoadingProps {
    isDark: boolean;
}
const LoaderBig = (props: ILoadingProps) => {
    const {isDark} = props;

    return <div className={parseCssDark('loading-screen__wrapper', isDark)}>
        <CircularProgress
            className={parseCssDark('loading-screen__spinner', isDark)}
        />
        <p className={parseCssDark('loading-screen__text', isDark)}>Loading</p>
    </div>
}


const LoaderSmall = (props: ILoadingProps) => {
    const {isDark} = props;

    return <div className={parseCssDark('loading-screen__wrapper', isDark)}>
        <CircularProgress
            className={parseCssDark('loading-screen__spinner', isDark)}
        />
    </div>
}

interface ILoadingScreenProps {
    small?: boolean;
    isDark: boolean;
}
const LoadingScreen = (props: ILoadingScreenProps) => {
    const {small, isDark} = props;

    return (
        small ? <LoaderSmall isDark={isDark}/> : <LoaderBig isDark={isDark}/>
    );
};

export default LoadingScreen;
