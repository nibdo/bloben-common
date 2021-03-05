import Axios from 'bloben-common/utils/axios';

export const BITCOIN_ADDRESS_PATH = '/bitcoin-address';
export const TIMEZONES_ADDRESS_PATH = 'timezones';

const GeneralApi = {
  getTimezones: async () => Axios.get(`/v1/${TIMEZONES_ADDRESS_PATH}`),
};

export default GeneralApi;
