import axios from 'axios';

import Axios from 'bloben-common/utils/axios';

export const BITCOIN_ADDRESS_PATH: string = '/bitcoin-address';
export const TIMEZONES_ADDRESS_PATH: string = 'timezones';

const GeneralApi = {
    /*
     * Get fresh bitcoin address
     */
    getBitcoinAddress: async () =>
         Axios.get(`/${BITCOIN_ADDRESS_PATH}`),

    getTimezones: async () =>
        Axios.get(`/${TIMEZONES_ADDRESS_PATH}`),

}

export default GeneralApi;
