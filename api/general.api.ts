import axios from 'axios';

import Axios from 'bloben-common/utils/axios';
import { ANALYTICS_URL } from '../globals/url';

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

    /**
     * Simple analytics with privacy in the mind
     * No actual geolocation through IP address, just guessing from timezone
     * This info is shared directly to Bloben's servers, no third party analytics is used
     */
    sendVisit: async (isMobile: boolean, isRegistered: boolean): Promise<void> => {
        if (process.env.NODE_ENV === 'development') {
            return;
        }

        const timeZoneLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;

        await axios.post(`${ANALYTICS_URL}/visitor`, {
            referrer: document.referrer,
            location: timeZoneLocation,
            isMobile,
            isRegistered
        })
    }
}

export default GeneralApi;
