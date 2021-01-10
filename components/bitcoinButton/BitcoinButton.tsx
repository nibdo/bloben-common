import React from 'react';

import './BitcoinButton.scss';
import BitcoinImage from '../../assets/bitcoin.svg';

interface IBitcoinButtonProps {
  onClick: any;
}

const BitcoinButton = (props: IBitcoinButtonProps) => {
  const { onClick } = props;

  return (
    <div className={'bmc-btn-container'}>
      <a className={'bitcoin-btn'} onClick={onClick}>
        <img
          src={BitcoinImage}
          className={'svg-icon-button'}
          alt={'bitcoin_button'}
        />
        <span className={'bmc-btn-text'}>Donate Bitcoin</span>
      </a>
    </div>
  );
};

export default BitcoinButton;
