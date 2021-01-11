import React, { useContext } from 'react';
import './LoadingScreen.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Context } from '../../../bloben-package/context/store';
import { parseCssDark } from '../../utils/common';


const LoaderBig = () => {
    const [store] = useContext(Context);
    const {isDark} = store;

    return <div className={parseCssDark('loading-screen__wrapper', isDark)}>
        <CircularProgress
            className={parseCssDark('loading-screen__spinner', isDark)}
        />
        <p className={parseCssDark('loading-screen__text', isDark)}>Loading</p>
    </div>
}

const LoaderSmall = () => {
    const [store] = useContext(Context);
    const {isDark} = store;

    return <div className={parseCssDark('loading-screen__wrapper', isDark)}>
        <CircularProgress
            className={parseCssDark('loading-screen__spinner', isDark)}
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
