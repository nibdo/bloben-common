import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { IconButton } from '@material-ui/core';

import './BitcoinPopup.scss';
import Axios from '../../utils/axios';
import { BITCOIN_ADDRESS_PATH } from '../../api/general.api';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import EvaIcons from '../eva-icons';
import InputForm from '../inputForm/InputForm';
// tslint:disable-next-line:no-require-imports no-var-requires
const QRCode: any = require('qrcode.react');

interface IBitcoinContentProps {
    address: string;
}

const BitcoinContent = (props: IBitcoinContentProps) => {
    const {address} = props;

    return <div className={'bitcoin-popup__content-wrapper'}>
        <div className={'bitcoin-popup__content-container'}>
            <QRCode value={address} />
        </div>
        <InputForm
            label={'Address'}
            name={'Address'}
            defaultValue={address}
            value={''}
            onChange={() => {return}}
        />
        <p className={'bitcoin-popup__footer'}>Thank you!</p>
    </div>
}

const BitcoinPopup = (props: any) => {
    const {handleClose} = props;
    const [isLoadingAddress, setIsLoadingAddress] = useState(true);
    const [address, setAddress] = useState('');

    const handlePreventDefault = (e: any): void => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onCloseClick = (e: any) => {
        handlePreventDefault(e)
        handleClose();
    }

    // Get fresh bitcoin address from server
    const getBitcoinAddress = async (): Promise<void> => {
        // Start loading screen
        setIsLoadingAddress(true);

        // Try to get address
        const response: AxiosResponse = await Axios.get(BITCOIN_ADDRESS_PATH);
        setIsLoadingAddress(false);

        if (response && response.data) {
            setAddress(response.data.address);
        }

    }

    // Get fresh address on popup open
    useEffect(() => {
        getBitcoinAddress()
    }, [])

    return <div className={'bitcoin-popup__wrapper'} onClick={onCloseClick}>
        <div className={'bitcoin-popup__container'} onClick={handlePreventDefault}>
            <h6 className={'bitcoin-popup__title'}>
                Donate Bitcoin
            </h6>
            <IconButton className={'bitcoin-popup__button-close'} onClick={onCloseClick}>
                <EvaIcons.Cross className={'icon-svg'}/>
            </IconButton>
            {isLoadingAddress
                ? <div className={'bitcoin-popup__loading-wrapper'}>
                <LoadingScreen small/>
                </div>
                    : null
            }
            {address.length > 0 ? <BitcoinContent address={address}/> : null }
        </div>
    </div >
}

export default BitcoinPopup;
